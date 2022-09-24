var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var dino = { // 공룡 캐릭터의 기본정보를 오브젝트 형태로 저장해놓음
    x : 10,
    y : 200,     // 왼쪽에서부터 x로 10픽셀, 위에서부터 200픽셀에서 처음 등장할 것임
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height); // 왼쪽부터 x, y 좌표에 width*height 사이즈의 네모를 만들어달라
    }
}

class Cactus{ // 장애물 정보 클래스 형태로 저장
    constructor(){
        this.x = 500; //선인장의 x좌표
        this.y = 200;  //선인장의 y좌표
        this.width = 50;  //선인장의 너비
        this.height = 50;  //선인장의 높이
    }
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height); // 왼쪽부터 x, y 좌표에 width*height 사이즈의 네모를 만들어달라
    }
}
var timer = 0;
var cactuses = [];
function 프레임마다실행할거(){ // 1초에 60번 이 코드를 실행시키면 된다.
    requestAnimationFrame(프레임마다실행할거);
    timer++;
    ctx.clearRect(0,0, canvas.width, canvas.height);
    if(timer % 144 === 0){
        var cactus = new Cactus(); // 장애물은 2~3초에(120프레임마다) 한번씩 리스폰 돼야 하니까 생성 코드는 2~3초에 한번씩 실행하게 한다.
        cactuses.push(cactus);
    }
    cactuses.forEach((a)=>{ // 120 프레임 단위로 만들어진 장애물들을 배열에 넣고, 한번에 그려준다.
        a.x--; // 장애물들을 1프레임씩 공룡쪽으로 오게 x좌표 설정
        a.draw();
    })
    //dino.x++; //공룡을 오른쪽으로 1초에 60만큼 옆으로 이동시켜준다. 근데 이렇게 하면 옆으로 길게 늘어져서 위에 코드처럼 캔버스를 비워줘야 한다.
    dino.draw();
}
프레임마다실행할거();