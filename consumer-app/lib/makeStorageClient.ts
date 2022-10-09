import { Web3Storage } from "web3.storage";

function getAccessToken() {
  // If you're just testing, you can paste in a token
  // and uncomment the following line:
  // return 'paste-your-token-here'

  // In a real app, it's better to read an access token from an
  // environement variable or other configuration that's kept outside of
  // your code base. For this to work, you need to set the
  // WEB3STORAGE_TOKEN environment variable before you run your code.
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDQxNjZGNDI4N2M2MzAwRkM0NEE3QjFGYWM3ZDQwMjhDQ0Y2ZTY0N0UiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NjUyNjU1MDY2NDUsIm5hbWUiOiJoZWxsb3dlYjNzdG9yYWdlIn0.FKrm3zj31tdDaPMt5f9tR5VZgKRbOA3vq5SceA15jIg";
}

export function makeStorageClient() {
  return new Web3Storage({ token: getAccessToken() });
}
