package main
import "os/exec"


// evaluation information start
// real case = true
// evaluation item = 准确度->路径敏感分析->跳转语句
// scene introduction = break
// level = 4+
// bind_url = accuracy/path_sensitive/explicit_jump_control/break_003_T/break_003_T
// evaluation information end

func break_003_T(__taint_src string) {
	res := ""
	for i := 0; i < 10; i++ {
		if i == 3 {
			res = __taint_src
		}
		__taint_sink(res)
	}
}

func __taint_sink(o interface{}) {
	_ = exec.Command("sh", "-c", o.(string)).Run()
	}

func main() {
    __taint_src := "taint_src_value"
    break_003_T(__taint_src)
}