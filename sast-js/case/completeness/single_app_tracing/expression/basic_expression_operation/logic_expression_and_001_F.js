// evaluation information start
// real case = false
// evaluation item = 完整度->单应用跟踪完整度->表达式->基础表达式
// scene introduction = 逻辑表达式-与表达式
// level = 2
// bind_url = completeness/single_app_tracing/expression/basic_expression_operation/logic_expression_and_001_F
// evaluation information end
const { execSync } = require('child_process');


function logic_expression_and_001_F(__taint_src) {
  let result = "_" && "abc";
  __taint_sink(result);
}

function __taint_sink(o) {
  execSync(o);
}

const taint_src = "taint_src_value";

logic_expression_and_001_F(taint_src);
