import { MutationTree } from "vuex";
import * as type from "./mutation-types";

const mutations: MutationTree<any> = {
  [type.GET_TOPIC_LIST](state, data) {
    state.topics = data;
  }
};

export default mutations;
