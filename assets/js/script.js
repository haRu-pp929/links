    const app = Vue.createApp({
      data() {
        return {
          menus: [
          {
              title: 'ロイヤル',
              items: [],
              submenus: [
                {
                  title: '求人',
                  items: [
                    { text: '電子契約締結に関して',
                      link: 'https://docs.google.com/document/d/1WAHns85TBrnR_Pm3WkWfQCXiAO1rc8_iQkiFSBdIl60/edit?tab=t.0#heading=h.ocapcdck28n9' },
                    { text: '業務委託契約書格納フォルダ',
                      link: 'https://drive.google.com/drive/folders/1BLm6hZ_xKFgSvi3CCTGv5Oxc0k5_zPFy' },
                    { text: 'シュフティ運用チャート',
                      link: 'https://docs.google.com/document/d/1xXmKD9kTEO6k2SMtut08ZMKhspqiLBUrEjwrB92EKgY/edit?tab=t.0#heading=h.gba32ls0806' },
                    { text: '人事管理シート',
                      link: 'https://docs.google.com/spreadsheets/d/16svZ4NRZETrpnLvQbfTEzyDCz4dqXrfmdtJBTI24WQ8/edit?gid=2049920467#gid=2049920467' },
                    { text: '求人関係フォルダ',
                      link: 'https://drive.google.com/drive/folders/1lewyesO4B4NGZ3GYWRb1ilBCDQJuyDRc' },
                    { text: '', link: '#about' }
                  ]
                },
                {
                  title: 'ツール',
                  items: [
                    { text: 'シュフティ',
                      link: 'https://app.shufti.jp/mypage' },
                    { text: 'クラウドサイン',
                      link: 'https://www.cloudsign.jp/dashboard' }
                  ]
                }
              ]
            },
          {
              title: 'ゆきちゃん',
              submenus: [
                {
                  title: 'X',
                  items: [
                     { text: 'URL',link: 'https://x.com/yukichan_112'},
                     { text: 'yukichan_112',link: ''},
                     { text: 'Pajama_joshi11',link: ''}
                  ]
                },
                {
                  title: 'ドロップボックス',
                  items: [
                     { text: 'URL',link: 'https://x.com/yukichan_112'},
                     { text: 'yukichan_112',link: ''},
                     { text: 'Pajama_joshi11',link: ''}
                  ]
                },
                {
                  title: 'ドライブ',
                  items: [
                     { text: 'URL',link: 'https://drive.google.com/drive/folders/10gstNhhjw-8GApQ73kQuojxIKnFKNwVi?usp=drive_link'}
                  ]
                }
              ]
            }
          ]
        };
      }
    });

    app.mount('#app');