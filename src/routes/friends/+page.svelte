<script>
  import Backbtn from "../../components/Backbtn.svelte";
</script>

<header>
  <div>
    <Backbtn />
    <h1 class="text-center font-bold text-lg">Eat together</h1>
    <p class="text-center text-xs">
      See what your friends are making for dinner.
    </p>
  </div>
</header>

<main>
  <input type="search" placeholder="Search friends" class="relative m-2 rounded-md"/>

  <div class="table table-auto w-full bg-green-700">
    <div class="table-header-group">
      <div class="table-row">
        <div class="table-cell text-left"><img src="" alt="pfp"></div>
        <div class="table-cell text-left ...">John Doe</div>
        <div class="table-cell text-left"><img src="" alt="meal"></div>
        <div class="table-cell text-left"><button type="button"><i class="fa-solid fa-chevron-right"></i></button></div>
      </div>
      <div class="table-row">
        <div class="table-cell text-left"><img src="" alt="pfp"></div>
        <div class="table-cell text-left ...">Jane Doe</div>
        <div class="table-cell text-left"><img src="" alt="meal"></div>
        <div class="table-cell text-left"><button type="button"><i class="fa-solid fa-chevron-right"></i></button></div>
      </div>
    </div>
  </div>
  
  <i class="fa-solid fa-chevron-right"></i>
</main>
