<div class="calculator">
  <div class="display">0</div>
  <div class="keyboard">
    <div>
      <div>7</div>
      <div>8</div>
      <div>9</div>
      <div>x</div>
    </div>
    <div>
      <div>6</div>
      <div>5</div>
      <div>4</div>
      <div>/</div>
    </div>
    <div>
      <div>3</div>
      <div>2</div>
      <div>1</div>
      <div>-</div>
    </div>
    <div>
      <div>.</div>
      <div>0</div>
      <div>=</div>
      <div>+</div>
    </div>
  </div>
</div>

<style lang="scss">
  .calculator {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    gap: size(2);
    width: size(80);
    height: size(110);
    margin: size(4);
    border: 4px solid $mainBg;
    background-color: $mainBg;
    color: $mainText;
    border-radius: $radiusLarge;
    box-shadow: $shadowLarge;

    .display {
      width: 100%;
      height: size(30);
      padding: size(2);
      display: flex;
      justify-content: flex-end;
      align-items: center;
      background-color: $bg1;
      color: $text2;
      border-radius: $radiusMedium;
      font-size: size(14);
    }

    .keyboard {
      display: flex;
      flex-direction: column;
      gap: size(1);
      height: 100%;

      div {
        display: flex;
        align-items: stretch;
        gap: size(1);
        height: 100%;
      }

      div div {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: size(10);
        border-radius: $radiusMedium;
        cursor: pointer;
        user-select: none;
        transition: 0.3s;

        &:hover {
          background-color: $main;
        }
      }
    }
  }
</style>
