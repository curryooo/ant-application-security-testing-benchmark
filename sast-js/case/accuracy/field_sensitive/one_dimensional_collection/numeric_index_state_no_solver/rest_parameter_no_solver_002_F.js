// evaluation information start
// real case = false
// evaluation item = 准确度->对象敏感与域敏感分析->区分一维字典/列表/数组的不同元素->索引值为数字的场景，能够区分不同索引上特定元素的状态(无需求解)
// scene introduction = 数组索引->剩余参数
// level = 3
// bind_url = accuracy/field_sensitive/one_dimensional_collection/numeric_index_state_no_solver/rest_parameter_no_solver_002_F
// evaluation information end
const { execSync } = require('child_process');


function rest_parameter_no_solver_002_F(__taint_src) {
  collectArgs("prefix", __taint_src, "suffix");
}

function collectArgs(...args) {
  __taint_sink(args[0]);
}

function __taint_sink(o) {
  execSync(o);
}

const taint_src = "taint_src_value";

rest_parameter_no_solver_002_F(taint_src);
