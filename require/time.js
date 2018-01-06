
    function fb(n) {
        if (n == 1 || n == 2) {
            return 1
        }
        return fb(n - 1) + fb(n - 2)
    }

    console.log("fb开始了......");

    fb(42)

    console.log("fb执行结束了.......");
