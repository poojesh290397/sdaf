/**
 *
 */
function eli_cal(){
    document.getElementById("eli_cal_head").classList.add("invisible");
    document.getElementById("eli_cal_cont").classList.remove("invisible");
    document.getElementById("emi_cal_cont").classList.add("invisible");
    document.getElementById("emi_cal_head").classList.remove("invisible");
}

function emi_cal(){
    document.getElementById("emi_cal_head").classList.add("invisible");
    document.getElementById("emi_cal_cont").classList.remove("invisible");
    document.getElementById("eli_cal_head").classList.remove("invisible");
    document.getElementById("eli_cal_cont").classList.add("invisible");
}

$(document).ready(function(){

     $("#eliCalculate").click(function(e){
         var monthlySalary = $('input[name="monthlyIncome"]').val();
         monthlySalary = monthlySalary;
         var tenure = $('input[name="eliTenure"]').val();
         var roi=8.5;
         if( (monthlySalary <0) || (tenure < 4) || (tenure>40)){
            $("#form_eli").valid();
         }
         var eligibility=monthlySalary*tenure*roi*.5;
         eligibility=eligibility.toString();
         $("#eligibility").html("Rs "+eligibility);
         e.preventDefault();
     });

     $("#emiCalculate").click(function(e){
         var emiLoan = $('input[name="emiLoan"]').val();
         var tenure = $('input[name="emiTenure"]').val();
         var roi=8.5/1200;
         if((emiLoan <1000000 )||( tenure < 4) || (tenure>40)||(emiLoan>100000000)){
            $("#form_emi").valid();
         }
         tenure=tenure*12;
         var emiValue=((emiLoan*roi*(Math.pow(1+roi,tenure)))/( Math.pow(1+roi,tenure)-1));
         emiValue=Math.round(emiValue);
         emiValue=emiValue.toString();
         $("#emiValue").html("Rs "+emiValue);
         e.preventDefault();
     });
});
