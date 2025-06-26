    // シンプルなログイン処理（デモ用）
    function handleLogin(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // デモ用：ユーザー名「admin」、パスワード「1234」で成功
      if (username === 'admin' && password === '1234') {
        window.location.href = 'main.html'; // メインページへ遷移
      } else {
        document.getElementById('error-msg').style.display = 'block';
      }
    }