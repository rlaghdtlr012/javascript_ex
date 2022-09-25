var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img2 = new Image(); // 네모대신 이미지 넣기
img2.src = 'dinosaur.png';

var dino = { // 공룡 캐릭터의 기본정보를 오브젝트 형태로 저장해놓음
    x : 10,
    y : 200,     // 왼쪽에서부터 x로 10픽셀, 위에서부터 200픽셀에서 처음 등장할 것임
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'red';
        //ctx.fillRect(this.x, this.y, this.width, this.height); // 왼쪽부터 x, y 좌표에 width*height 사이즈의 네모를 만들어달라
        ctx.drawImage(img2, this.x, this.y, this.width, this.height);
    }
}
var img1 = new Image(); // 네모대신 이미지 넣기
img1.src = 'cactus.png';
class Cactus{ // 장애물 정보 클래스 형태로 저장
    constructor(){
        this.x = 500; //선인장의 x좌표
        this.y = 200;  //선인장의 y좌표
        this.width = 40;  //선인장의 너비
        this.height = 50;  //선인장의 높이
    }
    draw(){
        ctx.fillStyle = 'green';
        //ctx.fillRect(this.x, this.y, this.width, this.height); // 왼쪽부터 x, y 좌표에 width*height 사이즈의 네모를 만들어달라
        ctx.drawImage(img1, this.x-15, this.y, this.width+30, this.height);
    }
}
var 점프timer = 0;
var timer = 0;
var cactuses = [];
var animation;
function 프레임마다실행할거(){ // 1초에 60번 이 코드를 실행시키면 된다.
    animation = requestAnimationFrame(프레임마다실행할거);
    timer++;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if(timer % 200 === 0){
        var cactus = new Cactus(); // 장애물은 2~3초에(144 프레임마다) 한번씩 리스폰 돼야 하니까 생성 코드는 2~3초에 한번씩 실행하게 한다.
        cactuses.push(cactus);
    }
    cactuses.forEach((a, i, o)=>{ // 120 프레임 단위로 만들어진 장애물들을 배열에 넣고, 한번에 그려준다.
        if(a.x < 0){
            o.splice(i,1);// x좌표가 0 미만이면 선인장 제거
        }
        a.x--; // 장애물들을 1프레임씩 공룡쪽으로 오게 x좌표 설정
        collision(dino, a); // 주인공 vs 모든 장애물 충돌체크 해야하니까 여기에다가 코드 작성해야함
        a.draw();
    })
    //dino.x++; //공룡을 오른쪽으로 1초에 60만큼 옆으로 이동시켜준다. 근데 이렇게 하면 옆으로 길게 늘어져서 위에 코드처럼 캔버스를 비워줘야 한다.
    if(점프중 === true){
        dino.y--; // 점프할 때, y좌표
        점프timer++;
    }
    if(점프timer > 100){
        점프중 = false;
        점프timer = 0;
    }
    if(점프중 === false){
        if(dino.y < 200){
            dino.y++;
        }
    }
    dino.draw();
}

프레임마다실행할거();


// 충돌확인
function collision(dino, cactus){
    var xdiff = cactus.x - (dino.x + dino.width);
    var ydiff = cactus.y - (dino.y + dino.height);
    if(xdiff < -10 && ydiff < 0){
        ctx.clearRect(0,0, canvas.width, canvas.height); // 장애물 충돌하면, 캔버스 클리어하고, 겜 종료
        cancelAnimationFrame(animation);
    }
}


var 점프중 = false;
document.addEventListener('keydown', function(e){
    if(e.code === 'Space'){ // 스페이스바 누르면
        점프중 = true;
    }
})





//?/??문법
var user = {
    name : 'kim',
    //age : {value : 20}
}
console.log(user.age?.value); // user.age가 정의되어 있지 않다면 value 출력 안해줌~
console.log( undefined ?? '이거대신보여줘') // ?? 왼쪽에 있는게 undefined, null이면 ?? 오른쪽에 있는거 보여줘~