<!doctype html>
<html lang="en">

<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>    
</head>
<body>
    <div class="container">
        <div class="row Title">
            <div class="col-lg-5">
                <h1>Crystal Collector</h1>
            </div>
            <div class="row rules">
                <div class="col-lg-7">
                    <p>You will be given a random number at the start of the game.</p>
                    <p>There are four crystals below. By clicking on a crystal you will add a specific amount of points to your
                        total score.
                    </p>
                    <p> You win the game by matching your total score to random number, you lose the game if your total score
                        goes above the random number.
                    </p>
                    <p>The value of each crystal is hidden from you until you click on it.
                    </p>
                    <p> Each time when the game starts, the game will change the values of each crystal.
                    </p>
                </div>
            </div>
            </div>
            </div>
            <div class="container">
            <div class="row ">
                <div class="col-lg-3 bg-primary">
                <h2 class= "num"> </h2>
                </div>
                <div class="col-lg-1"> </div>
                <div class="col-lg-1 bg-secondary ">
                <p class = "wins" > wins: </p>
                <p class = "loss" > loss: </p>
                </div>

            </div>
            <div class="row crystal">
                <div class="col-lg-6">
                <img class = "Crystal1" src="https://c-8oqtgrjgwu46x24f3w7r5n6yrca5mx2eenqwfhtqpvx2epgv.g00.gamepedia.com/g00/3_c-8bgnfc.icogrgfkc.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff3w7r5n6yrca5m.enqwfhtqpv.pgvx2fbgnfc_icogrgfkc_gpx2f1x2f1ex2fDqvY_Itggp_Twrgg_Keqp.rpix3fx78gtukqpx3d7h5f95c29h3c459c69397h6e452g89cg_$/$/$/$/$?i10c.ua=1&i10c.dv=14" alt="c1">
                <img class = "Crystal2" src="https://c-8oqtgrjgwu46x24f3w7r5n6yrca5mx2eenqwfhtqpvx2epgv.g00.gamepedia.com/g00/3_c-8bgnfc.icogrgfkc.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff3w7r5n6yrca5m.enqwfhtqpv.pgvx2fbgnfc_icogrgfkc_gpx2f7x2f77x2fDqvY_Dnwg_Twrgg_Keqp.rpix3fx78gtukqpx3df216g485e11h9hf1h40gc88dd81d7d8c_$/$/$/$/$?i10c.ua=1&i10c.dv=14" alt="c2">
                <img class = "Crystal3" src="https://c-8oqtgrjgwu46x24f3w7r5n6yrca5mx2eenqwfhtqpvx2epgv.g00.gamepedia.com/g00/3_c-8bgnfc.icogrgfkc.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff3w7r5n6yrca5m.enqwfhtqpv.pgvx2fbgnfc_icogrgfkc_gpx2fcx2fc2x2fDqvY_Tgf_Twrgg_Keqp.rpix3fx78gtukqpx3d266f6hc275eed0h129df960801dh98e7_$/$/$/$/$?i10c.ua=1&i10c.dv=14" alt="c3">
                <img class = "Crystal4" src="https://c-8oqtgrjgwu46x24f3w7r5n6yrca5mx2eenqwfhtqpvx2epgv.g00.gamepedia.com/g00/3_c-8bgnfc.icogrgfkc.eqo_/c-8OQTGRJGWU46x24jvvrux3ax2fx2ff3w7r5n6yrca5m.enqwfhtqpv.pgvx2fbgnfc_icogrgfkc_gpx2fdx2fd1x2fDqvY_Rwtrng_Twrgg_Keqp.rpix3fx78gtukqpx3d7ef89d9787c3e7414hh2119cgfgd789f_$/$/$/$/$?i10c.ua=1&i10c.dv=14" alt="c4">
               
                </div>
            </div>

            <div class="row words">
                <div class="col-lg-3">
                your total score is
                </div>
            </div>
            <div class="row ">
                <div class="col-lg-3">
                <h2 class ="scores"> </h2>
                </div>

            </div>
        </div>
    
        <!-- Optional JavaScript -->
        <script type="text/javascript">
         var wins = 0;
        var loss = 0;
        var num;
        var total;
        var c1;
        var c2;
        var c3;
        var c4;
        var won = false;
        var lost = false;
        $(".wins").text("wins: " + wins);
        $(".loss").text("loss: " + loss);
        
        function resetGame(){
        won = false;
        lost = false;
        total = 0;
        
        $(".scores").text(total);
        function getRndInteger(min, max) {
         return Math.floor(Math.random() * (max - min) ) + min;}
        
        num = getRndInteger(19, 120);
        $(".num").text(num);
        c1 = getRndInteger(1, 12);
        c2 = getRndInteger(1, 12);
        c3 = getRndInteger(1, 12);
        c4 = getRndInteger(1, 12);
        console.log(getRndInteger(1, 12));
        };
     
        resetGame();
        
        
        $(".num").text(num);
        $(".Crystal1").click(function () {
        total += c1;
        console.log(c1);
        $(".scores").text(total);
        check()
        });
        $(".Crystal2").click(function () {
        total += c2;
        console.log(c2);
        $(".scores").text(total);
       check()
        });
        $(".Crystal3").click(function () {
        total += c3;
        console.log(c3);
        $(".scores").text(total);
        check()
        });
        $(".Crystal4").click(function () {
        total += c4;
        console.log(c4);
        $(".scores").text(total);
       check()
        });
         
    
        
        
        
        
        function check() {
        
            if (total === num){
               wins++;
               $(".wins").text("wins: " + wins);
               resetGame(); 
            }
            else if (total > num){
                loss++;
                $(".loss").text("loss: " + loss);
                resetGame();
            }
        }
        
        
        
        </script>
        
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
</body>

</html>