export interface PlayerState {
  x: number;
  y: number;
  isAttacking: boolean;
}

export function createPlayer(): PlayerState {
  return {
    x: 0,
    y: 0,
    isAttacking: false,
  };
}

export function move(
  player: PlayerState,
  dx: number,
  dy: number
): PlayerState {
  return {
    ...player,
    x: player.x + dx,
    y: player.y + dy,
  };
}

export function startAttack(player: PlayerState): PlayerState {
  return {
    ...player,
    isAttacking: true,
  };
}

export function stopAttack(player: PlayerState): PlayerState {
  return {
    ...player,
    isAttacking: false,
  };
}
