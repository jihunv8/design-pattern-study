class SoccerPlayer {
  static readonly shotType = {
    winding: '감아차기',
    driven: '드리븐',
    shot: '',
  } as const;

  static readonly skillType = {
    marsille: '마르세유 턴',
    stepOver: '스텝오버',
  } as const;

  shot(type: keyof typeof SoccerPlayer.shotType) {
    console.log(`전방으로 ${SoccerPlayer.shotType[type]} 슛`);
  }

  useSkill(type: keyof typeof SoccerPlayer.skillType) {
    console.log(`${SoccerPlayer.skillType[type]} !!!`);
  }

  move(distance: number) {
    console.log(`거리 ${distance}만큼 이동`);
  }
}

export default SoccerPlayer;
