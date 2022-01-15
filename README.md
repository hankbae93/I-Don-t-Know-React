# 켜져있는 3000포트 강제로 끄는 법

    netstat -ano|findstr 3000

    //결과
    TCP 0.0.0.0:3000 0.0.0.0:0 LISTENING 10248
    여기서 맨오른쪽 숫자가 pid

    - git bash
    taskkill //PID (해당 pid)

    - cmd
    taskill /f /pid (해당 pid)
