const taskJson = `
[
  {
    "id": 0,
    "title": "seedデータ入れる",
    "content": "cloud firestoreにseedデータを入れる。試しに10件",
    "labels": ["server"],
    "status": "DONE"
  },
  {
    "id": 1,
    "title": "seedデータを取得するロジックを書く",
    "content": "firestoreからデータを取得するロジックを書く",
    "labels": ["front"],
    "status": "IN_PROGRESS"
  },
  {
    "id": 2,
    "title": "取得したデータをコンポーネントに埋め込む",
    "content": "seedデータをコンポーネントに埋め込む",
    "labels": ["front"],
    "status": "IN_PROGRESS"
  },
  {
    "id": 3,
    "title": "データ追加用ダイアログを作成",
    "content": "firestoreにデータを追加するためのダイアログを作成する",
    "labels": ["front"],
    "status": "TODO"
  },
  {
    "id": 4,
    "title": "データを追加するロジックを書く",
    "content": "firestoreにデータを追加するロジックを書く",
    "labels": ["server"],
    "status": "TODO"
  },
  {
    "id": 5,
    "title": "追加ボタンからデータを追加する",
    "content": "ボタンクリック時にデータ追加ロジックを呼び出す",
    "labels": ["front"],
    "status": "TODO"
  },
  {
    "id": 6,
    "title": "React Routerを導入",
    "content": "React Routerを導入 & 空のタスク詳細ページを作る",
    "labels": ["front"],
    "status": "TODO"
  },
  {
    "id": 7,
    "title": "タスク詳細ページへ遷移させる",
    "content": "モーダルのボタンクリック時にページ遷移させる",
    "labels": ["front"],
    "status": "TODO"
  },
  {
    "id": 8,
    "title": "データを編集するロジックを書く",
    "content": "タスク詳細ページからfirestoreのデータを編集するロジックを書く",
    "labels": ["server"],
    "status": "TODO"
  },
  {
    "id": 9,
    "title": "タスクをドラッグアンドドロップできるようにする",
    "content": "タスクをドラッグアンドドロップできるようにする",
    "labels": ["front"],
    "status": "TODO"
  },
  {
    "id": 10,
    "title": "ドラッグアンドドロップ時にstatusを変更",
    "content": "ドラッグアンドドロップ時にstatusが変更できるようにする",
    "labels": ["front"],
    "status": "TODO"
  }
]
`;

export const tasks = JSON.parse(taskJson);
