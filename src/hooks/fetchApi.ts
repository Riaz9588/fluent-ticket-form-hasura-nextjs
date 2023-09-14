import { useQuery } from "react-query";
// import { IgraphqlQuery, IOptions } from "../interfaces";

const endpoint: string = "https://glorious-eagle-50.hasura.app/v1/graphql"

const headers = {
  "content-type": "application/json",
  "x-hasura-admin-secret": "JCwPRZI0oxkWQTABoVLSbGQ61j3LlqdhPO0rmnR4j0lpzln6xlsFdPYYN3nyXb8x",
}

const fetchApi = (gqlQuery: any, triggerValue) => {
  const options = {
    "method": "POST",
    "headers": headers,
    "body": JSON.stringify(gqlQuery)
  };
  const { isLoading, isError, error, data } = useQuery("data", () =>
    fetch(endpoint, options)
      .then((res) => res.json())
      .then((res) => res.data)
    , { enabled: triggerValue });

  return { isLoading, isError, error, data }
}

export default fetchApi