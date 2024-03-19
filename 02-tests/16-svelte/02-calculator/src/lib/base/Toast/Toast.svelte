<script>
  import Icon from "../Icon/Icon.svelte";
  import IoMdNotifications from "svelte-icons/io/IoMdNotifications.svelte";
  import IoMdClose from "svelte-icons/io/IoMdClose.svelte";

  import "./styles.scss";
  import { toast } from "../../../utils/toast";
</script>

<div id="toast" class="toast visible error">
  <Icon white>
    <IoMdNotifications />
  </Icon>
  <div class="content">
    <b id="toast-title">Error on save customer</b>
    <small id="toast-text">Something went wrong!</small>
  </div>
  <Icon white onClick={toast.close}>
    <IoMdClose />
  </Icon>
</div>
