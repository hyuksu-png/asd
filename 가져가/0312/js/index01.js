// 함수 선언에서 활용하기 위하여 사용하는 변수를'매개변수'라고 부릅니다.
// 이름에서 드러나듯이 나중에 함수를 호출할 때 매개 역할을 하는 변수입니다.

// 함수를 호출할때 사용하는 것을'인자'라고 합니다.
// 즉,'전달인자'를 뜻합니다.

// 디폴트 매개변수
// function multiply(a,b=1){
//     return a*b;
// }

// document.write(multiply(5,2)+"<br>");
// 10

// document.write(multiply(5));
// 5

// function multiply(...nums){
//     for(var i=0; i<nums.length; i++){
//         var result = nums[i]*7;
//         document.write(result+"<br>");
//     }
// }

// 내가한 방식
// multiply(1,2,3);

// function multiply(a,b,c,){
//     return a*7+"<br>"+b*7+"<br>"+c*7;

// }
// document.write(multiply(1,2,3)+"<br>");

// 선생님 방식
function multiply(a,c=7){
    return a*c;
}
document.write(multiply(1)+"<br>");
document.write(multiply(2)+"<br>");
document.write(multiply(3)+"<br>");
