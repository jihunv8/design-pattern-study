class Robot {
  moveForward(num: number) {
    console.log(`앞으로 ${num}칸 이동`);
  }

  turn(direction: 'left' | 'right') {
    console.log(`${direction === 'left' ? '왼쪽으로' : '오른쪽으로'} 돌기`);
  }

  pickup() {
    console.log('물건 들기');
  }
}

export default Robot;
