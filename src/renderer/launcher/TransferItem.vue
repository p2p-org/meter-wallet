<template>
  <v-card class="elevation-0">
    <v-list>
      <v-list-tile avatar>
        <v-list-tile-avatar :size="40">
          <v-icon style="font-size: 19px" color="green lighten-1" v-if="isIn">mdi-arrow-right-thick</v-icon>
          <v-icon style="font-size: 19px" color="red darken-1" v-else>mdi-arrow-left-thick</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-sub-title class="mt-2">
            <v-layout>
              <v-flex xs6>
                <span class="body-2 grey--text text--darken-4 font-weight-regular">
                  TX#:
                  <a
                    @click="jumpToInsight(item.meta.txID)"
                    href="javascript:;"
                  >{{item.meta.txID | shortTxId}}</a>
                </span>
                <br />
                <span class="body-2 grey--text text--darken-4 font-weight-light">
                  <span
                    class="font-weight-light font-italic"
                  >{{ isIn ? 'Recieved from: ' : 'Transferred to: '}}</span>
                  {{ (isIn ? item.sender : item.recipient) | shortAddr}}
                </span>
              </v-flex>
              <v-flex xs6 class="text-xs-right caption">
                <span>{{item.meta.blockTimestamp | dateTime}}</span>
                <br />
                <p class="mt-2 pr-1 body-2 grey--text text--darken-4">
                  {{isIn ? "+" : "-"}}
                  <Amount v-if="item.token ==1" sym=" MTRG">{{item.amount}}</Amount>
                  <Amount v-if="item.token ==0" sym=" MTR">{{item.amount}}</Amount>
                </p>
              </v-flex>
            </v-layout>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-card>
</template>
<script lang="ts">
import { Vue, Component, Watch, Prop, Mixins } from "vue-property-decorator";
@Component
export default class TransferItem extends Vue {
  @Prop()
  item?: Flex.Meter.Transfer | null;

  @Prop(Boolean)
  isIn!: boolean;

  jumpToInsight(txID: string) {
    BUS.$emit("open-tab", {
      href: `https://insight.meter.io/#/txs/${txID}`,
      mode: "append-active"
    });
  }
}
</script>
