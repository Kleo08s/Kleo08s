import { settings } from "@vendetta";
import { Forms } from "@vendetta/ui/components";

const { View, Text } = Forms;

export default {
  onLoad() {
    // init settings se servono in futuro
    settings.store.helloWorld = "Hello World!";
  },
  onUnload() {},

  settings: () => (
    <View>
      <Text selectable={true}>{settings.store.helloWorld}</Text>
    </View>
  ),
};