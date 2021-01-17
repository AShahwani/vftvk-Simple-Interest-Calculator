function calculate()
    {
        p = document.getElementById("principal").value;
        n = document.getElementById("years").value;
        r = document.getElementById("rate").value;
        result = document.getElementById("result");
        
        result.innerHTML = "The interest is " + (p*n*r/100);
    }
        