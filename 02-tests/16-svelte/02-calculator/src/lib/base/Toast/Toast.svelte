<script>
  import "./styles.scss";

  import Icon from "../Icon/Icon.svelte";
  import IoMdNotifications from "svelte-icons/io/IoMdNotifications.svelte";
  import IoMdClose from "svelte-icons/io/IoMdClose.svelte";
  import { toast } from "../../../utils/toast";
</script>

<div id="toast" class="toast">
  <Icon white>
    <IoMdNotifications />
  </Icon>
  <div class="content">
    <b id="toast-title"></b>
    <small id="toast-text"></small>
  </div>
  <Icon white onClick={toast.close}>
    <IoMdClose />
  </Icon>
</div>
