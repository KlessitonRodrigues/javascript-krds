<div class="cards">
  <div class="card">
    <h5>New card with description</h5>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia tempora
      soluta voluptatem nesciunt aut temporibus consequatur perspiciatis! Totam
      eius nulla vero, doloremque numquam rem nostrum, odit commodi tempora
      possimus consequatur?
    </p>
  </div>
  <div class="card">
    <h5>New card with description</h5>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia tempora
      soluta voluptatem nesciunt aut temporibus consequatur perspiciatis! Totam
      eius nulla vero, doloremque numquam rem nostrum, odit commodi tempora
      possimus consequatur?
    </p>
  </div>
  <div class="card">
    <h5>New card with description</h5>
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia tempora
      soluta voluptatem nesciunt aut temporibus consequatur perspiciatis! Totam
      eius nulla vero, doloremque numquam rem nostrum, odit commodi tempora
      possimus consequatur?
    </p>
  </div>
</div>

<style lang="scss">
  .cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: size(4);

    .card {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: size(130);
      box-shadow: $shadowSmall;
      border-radius: $radiusMedium;
      overflow: hidden;
      cursor: pointer;
      transition: 0.3s;

      h5 {
        padding: size(4);
        padding-bottom: size(2);
        border-bottom: $borderSmall;
        color: $main;
      }

      p {
        padding: size(4);
      }

      &:hover {
        box-shadow: $shadowMedium;
      }
    }
  }
</style>
