// 버튼0 누르면 모든 버튼에 붙어있던 orange 클래스 제거
// 버튼0에 orange 클래스명 추가 
// 모든 div에 붙어있던 show 제거
// div0에 show 클래스명 추가
// 매번 쿼리셀렉터 쓰지말고(기능저하 되니까) var 버튼 = $('.tab-button');으로 변수지정해서 쓰기
// $('.tab-button').eq(0).on('click', function(){
//     for(var i = 0; i < 3; i++){
//         document.querySelectorAll('.tab-button')[i].classList.remove('orange');
//     }
//     //$('.tab-button').removeClass('orange');
//     for(var i = 0; i < 3; i++){
//         document.querySelectorAll('.tab-content')[i].classList.remove('show');
//     }
//     //$('.tab-button').removeClass('show');
//     document.querySelectorAll('.tab-button')[0].classList.add('orange');
//     //$('tab-button').eq(0).addClass('orange');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
//     //$('.tab-button').eq(0).addClass('show');
// });
// $('.tab-button').eq(1).on('click', function(){
//     for(var i = 0; i < 3; i++){
//         document.querySelectorAll('.tab-button')[i].classList.remove('orange');
//     }
//     for(var i = 0; i < 3; i++){
//         document.querySelectorAll('.tab-content')[i].classList.remove('show');
//     }
//     document.querySelectorAll('.tab-button')[1].classList.add('orange');
//     document.querySelectorAll('.tab-content')[1].classList.add('show');
// });
// $('.tab-button').eq(2).on('click', function(){
//     for(var i = 0; i < 3; i++){
//         document.querySelectorAll('.tab-button')[i].classList.remove('orange');
//     }
//     for(var i = 0; i < 3; i++){
//         document.querySelectorAll('.tab-content')[i].classList.remove('show');
//     }
//     document.querySelectorAll('.tab-button')[2].classList.add('orange');
//     document.querySelectorAll('.tab-content')[2].classList.add('show');
// });
// for(let i = 0; i < document.querySelectorAll('.tab-button').length; i++){
//     $('.tab-button').eq(i).on('click', function(){
//         탭열기(i);
//     });
// }
$('.list').on('click',function(e){
    //지금 누른게 버튼 0이면 버튼 0에 orange 박스0 show
    탭열기(parseInt(e.target.dataset.id));
    //지금 누른게 버튼 1이면 버튼 1에 orange 박스1 show
    // if(e.target == document.querySelectorAll('.tab-button')[1]){
    //     탭열기(1);
    // }
    //지금 누른게 버튼 2이면 버튼 2에 orange 박스2 show
    // if(e.target == document.querySelectorAll('.tab-button')[2]){
    //     탭열기(2);
    // }
});
document.querySelector('.tab-button').dataset.id;
function 탭열기(a){
    $('.tab-button').removeClass('orange');
    $('.tab-button').eq(a).addClass('orange');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(a).addClass('show');
}