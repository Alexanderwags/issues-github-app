import React, { useState } from "react";
import { GetComments } from "../Api/GetData";
import Card from "../components/CardComments";
import Styles from "./styles/Comments/Styles.module.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import Question from "../components/Question";
const array = [
  {
    url:
      "https://api.github.com/repos/microsoft/playwright/issues/comments/625914849",
    html_url:
      "https://github.com/microsoft/playwright/issues/2157#issuecomment-625914849",
    issue_url: "https://api.github.com/repos/microsoft/playwright/issues/2157",
    id: 625914849,
    node_id: "MDEyOklzc3VlQ29tbWVudDYyNTkxNDg0OQ==",
    user: {
      login: "pavelfeldman",
      id: 883973,
      node_id: "MDQ6VXNlcjg4Mzk3Mw==",
      avatar_url: "https://avatars3.githubusercontent.com/u/883973?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/pavelfeldman",
      html_url: "https://github.com/pavelfeldman",
      followers_url: "https://api.github.com/users/pavelfeldman/followers",
      following_url:
        "https://api.github.com/users/pavelfeldman/following{/other_user}",
      gists_url: "https://api.github.com/users/pavelfeldman/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/pavelfeldman/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/pavelfeldman/subscriptions",
      organizations_url: "https://api.github.com/users/pavelfeldman/orgs",
      repos_url: "https://api.github.com/users/pavelfeldman/repos",
      events_url: "https://api.github.com/users/pavelfeldman/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/pavelfeldman/received_events",
      type: "User",
      site_admin: false,
    },
    created_at: "2020-05-08T16:58:53Z",
    updated_at: "2020-05-08T16:58:53Z",
    author_association: "CONTRIBUTOR",
    body:
      "I can see that we track it all the way to the addon navigation `.cache/ms-playwright/firefox-1093/firefox/omni.ja!/chrome/toolkit/content/global/reader/aboutReader.html` at which point, latter takes over. You can still interact with the page though. I pass `headless: false` and don't close the browser for you to see the result:\r\n\r\n```js\r\nconst { firefox } = require(\"playwright\");\r\n\r\n(async () => {\r\n        const browser = await firefox.launch({ headless: false});\r\n        const context = await browser.newContext();\r\n        const page = await context.newPage();\r\n        const response = await page.goto(\"about:reader?url=https://www.mozilla.org/firefox\");\r\n        // This is ugly since we have no insight into the addon business :(\r\n        await page.waitForTimeout(2000);\r\n        console.log('URL: ', page.url());\r\n        console.log('Title: ', await page.title());\r\n        await page.screenshot({ path: 'reader.png' });\r\n})();\r\n```",
  },
  {
    url:
      "https://api.github.com/repos/microsoft/playwright/issues/comments/625944733",
    html_url:
      "https://github.com/microsoft/playwright/issues/2157#issuecomment-625944733",
    issue_url: "https://api.github.com/repos/microsoft/playwright/issues/2157",
    id: 625944733,
    node_id: "MDEyOklzc3VlQ29tbWVudDYyNTk0NDczMw==",
    user: {
      login: "nmain",
      id: 24611942,
      node_id: "MDQ6VXNlcjI0NjExOTQy",
      avatar_url: "https://avatars2.githubusercontent.com/u/24611942?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/nmain",
      html_url: "https://github.com/nmain",
      followers_url: "https://api.github.com/users/nmain/followers",
      following_url:
        "https://api.github.com/users/nmain/following{/other_user}",
      gists_url: "https://api.github.com/users/nmain/gists{/gist_id}",
      starred_url: "https://api.github.com/users/nmain/starred{/owner}{/repo}",
      subscriptions_url: "https://api.github.com/users/nmain/subscriptions",
      organizations_url: "https://api.github.com/users/nmain/orgs",
      repos_url: "https://api.github.com/users/nmain/repos",
      events_url: "https://api.github.com/users/nmain/events{/privacy}",
      received_events_url: "https://api.github.com/users/nmain/received_events",
      type: "User",
      site_admin: false,
    },
    created_at: "2020-05-08T18:07:22Z",
    updated_at: "2020-05-08T18:07:22Z",
    author_association: "NONE",
    body:
      "Thanks for the response!  Following your lead, I am able to interact with the page.  Leaving this issue open because exactly how long to wait is a bit hacky or flaky, as well as detecting if the page failed to load.",
  },
  {
    url:
      "https://api.github.com/repos/microsoft/playwright/issues/comments/625977951",
    html_url:
      "https://github.com/microsoft/playwright/issues/2157#issuecomment-625977951",
    issue_url: "https://api.github.com/repos/microsoft/playwright/issues/2157",
    id: 625977951,
    node_id: "MDEyOklzc3VlQ29tbWVudDYyNTk3Nzk1MQ==",
    user: {
      login: "pavelfeldman",
      id: 883973,
      node_id: "MDQ6VXNlcjg4Mzk3Mw==",
      avatar_url: "https://avatars3.githubusercontent.com/u/883973?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/pavelfeldman",
      html_url: "https://github.com/pavelfeldman",
      followers_url: "https://api.github.com/users/pavelfeldman/followers",
      following_url:
        "https://api.github.com/users/pavelfeldman/following{/other_user}",
      gists_url: "https://api.github.com/users/pavelfeldman/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/pavelfeldman/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/pavelfeldman/subscriptions",
      organizations_url: "https://api.github.com/users/pavelfeldman/orgs",
      repos_url: "https://api.github.com/users/pavelfeldman/repos",
      events_url: "https://api.github.com/users/pavelfeldman/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/pavelfeldman/received_events",
      type: "User",
      site_admin: false,
    },
    created_at: "2020-05-08T19:25:20Z",
    updated_at: "2020-05-08T19:25:54Z",
    author_association: "CONTRIBUTOR",
    body:
      'You can wait for the given selector or poll page for updates. There is a predefined dom structure in the reader, so when it changes / goes away, you know that it has loaded content.\r\n\r\nIt is unlikely that we prioritize this issue since addons are outside of the "web" scope. But if we find an easy solution, happy to help.',
  },
];
function Comments(props) {
  const [band, setband] = useState(false);
  const [enc, setenc] = useState(false);
  const [inf, setinf] = GetComments(props.api.detail, band);
  const [inf2, setinf2] = GetComments(props.api.url, band);
  try {
    if (Object.entries(inf).length === 0 && band === false) {
      console.log("comments");
      setband(true);
    } else if (Object.entries(inf).length > 0 && band) {
      console.log("si hay comments");
      setband(false);
      setenc(true);
    }
  } catch (error) {}
  return (
    <div className={Styles.groupCard}>
      {enc === false ? (
        <CircularProgress disableShrink />
      ) : (
        <>
          <Question data={inf2} />
          {inf.map((info) => (
            <Card info={info} key={info.id} />
          ))}
        </>
      )}
    </div>
  );
}

export default Comments;
