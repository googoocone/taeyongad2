class ChannelService {
  loadScript() {
    (function () {
      var w = window;
      if (w.ChannelIO) {
        return w.console.error("ChannelIO script included twice.");
      }
      var ch = function () {
        ch.c(arguments);
      };
      ch.q = [];
      ch.c = function (args) {
        ch.q.push(args);
      };
      w.ChannelIO = ch;
      function l() {
        if (w.ChannelIOInitialized) {
          return;
        }
        w.ChannelIOInitialized = true;
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
        var x = document.getElementsByTagName("script")[0];
        if (x.parentNode) {
          x.parentNode.insertBefore(s, x);
        }
      }
      if (document.readyState === "complete") {
        l();
      } else {
        w.addEventListener("DOMContentLoaded", l);
        w.addEventListener("load", l);
      }
    })();
  }

  boot(option, callback) {
    window.ChannelIO("boot", option, callback);

    // --- START: 추가된 코드 ---
    // 채널톡 메신저(채팅창)가 열릴 때마다 실행될 콜백 함수를 등록합니다.
    // 사용자가 '남색 채널톡 버튼'을 클릭하면 메신저가 열리므로, 이 시점에 이벤트를 전송합니다.
    window.ChannelIO("onShowMessenger", function () {
      // gtag 함수가 사용 가능한지 확인 후, 전환 이벤트 전송
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-16722031338/32LrCKeQ2dYaEOrl16U-",
        });
        console.log("채널톡 버튼 클릭(onShowMessenger): 전환 이벤트 전송 완료");
      }
    });
    // --- END: 추가된 코드 ---
  }

  shutdown() {
    window.ChannelIO("shutdown");
  }

  showMessenger() {
    window.ChannelIO("showMessenger");
  }

  hideMessenger() {
    window.ChannelIO("hideMessenger");
  }

  openChat(chatId, message) {
    window.ChannelIO("openChat", chatId, message);
  }

  track(eventName, eventProperty) {
    window.ChannelIO("track", eventName, eventProperty);
  }

  onShowMessenger(callback) {
    window.ChannelIO("onShowMessenger", callback);
  }

  onHideMessenger(callback) {
    window.ChannelIO("onHideMessenger", callback);
  }

  onBadgeChanged(callback) {
    window.ChannelIO("onBadgeChanged", callback);
  }

  onChatCreated(callback) {
    window.ChannelIO("onChatCreated", callback);
  }

  onFollowUpChanged(callback) {
    window.ChannelIO("onFollowUpChanged", callback);
  }

  onUrlClicked(callback) {
    window.ChannelIO("onUrlClicked", callback);
  }

  clearCallbacks() {
    window.ChannelIO("clearCallbacks");
  }

  updateUser(userInfo, callback) {
    window.ChannelIO("updateUser", userInfo, callback);
  }

  addTags(tags, callback) {
    window.ChannelIO("addTags", tags, callback);
  }

  removeTags(tags, callback) {
    window.ChannelIO("removeTags", tags, callback);
  }

  setPage(page) {
    window.ChannelIO("setPage", page);
  }

  resetPage() {
    window.ChannelIO("resetPage");
  }

  showChannelButton() {
    window.ChannelIO("showChannelButton");
  }

  hideChannelButton() {
    window.ChannelIO("hideChannelButton");
  }

  setAppearance(appearance) {
    window.ChannelIO("setAppearance", appearance);
  }
}

export default ChannelService;
