<div class="container">
    <div class="left"></div>
    <div class="right"></div>
</div>

<style>
  * {
    padding: 0;
    margin: 0;
  }
  .container {
    width: 600px;
    height: 300px;
    display: flex;
  }
  .left {
    flex: 1 2 500px;
    background: red;
  }
  .right {
    flex: 2 1 400px;
    background: blue;
  }
</style>


子元素的 flex-shrink 的值分别为 2，1
溢出：500+400 - 600 = 300。
总权重为 2 * 500+ 1 * 400 = 1400
两个元素分别收缩：
300 * 2(flex-shrink) * 500(width) / 1400= 214.28
300 * 1(flex-shrink) * 400(width) / 1400= 85.72
三个元素的最终宽度分别为：
500 - 214.28 = 285.72
400 - 85.72 = 314.28