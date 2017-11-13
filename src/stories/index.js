import Vue from "vue";

import { storiesOf } from "@storybook/vue";
import Autosuggest from "../Autosuggest.vue";

storiesOf("Autosuggest", module).add("simple", () => ({
  components: { Autosuggest },
  template: `<div>
                    <div style="padding-top:10px; margin-bottom: 10px;"><span v-if="selected">You have selected {{selected}}</span></div>
                    <div>
                        <autosuggest 
                        :suggestions="filteredOptions"
                        :result-item-key="'firstname'"
                        :input-props="inputProps"
                        :section-configs="sectionConfigs"
                                />
                    </div>
                </div>`,
  data() {
    return {
      selected: "",
      limit: 10,
      filteredOptions: [],
      options: [
        {
          data: [
            "clifford kits",
            "friendly chemistry",
            "phonics",
            "life of fred",
            "life of fred math",
            "magic school bus",
            "math mammoth light blue",
            "handwriting",
            "math",
            "minecraft",
            "free worksheets",
            "4th grade",
            "snap circuits",
            "bath toys",
            "channies",
            "fred",
            "lego",
            "math life of fred",
            "multiplication",
            "thinking tree"
          ]
        }
      ],
      sectionConfigs: {
        default: {
          limit: 6,
          onSelected: (item, originalInput) => {
            console.log(`Selected "${item.item}"`);
          }
        }
      },
      inputProps: {
        id: "autosuggest__input",
        initialValue: "",
        onClick: () => {},
        onInputChange: this.onInputChange,
        placeholder: "Type 'g'"
      }
    };
  },
  methods: {
    onInputChange(text) {
      const filtered = [];
      const suggestionsData = this.options[0].data.filter(item => {
        return item.toLowerCase().indexOf(text.toLowerCase()) > -1;
      });

      suggestionsData.length > 0 &&
        filtered.push({
          label: "Suggestions",
          data: suggestionsData
        });

      this.filteredOptions = filtered;
    }
  }
}));