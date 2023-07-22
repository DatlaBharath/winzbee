/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      name
      email
      location {
        latitude
        longitude
        __typename
      }
      skills {
        id
        name
        __typename
      }
      events {
        id
        name
        description
        location {
          latitude
          longitude
          __typename
        }
        attendees {
          id
          name
          email
          __typename
        }
        startTime
        endTime
        __typename
      }
      recommendedEvents {
        id
        name
        description
        location {
          latitude
          longitude
          __typename
        }
        attendees {
          id
          name
          email
          __typename
        }
        startTime
        endTime
        __typename
      }
      posts {
        id
        content
        author {
          id
          name
          email
          __typename
        }
        createdAt
        __typename
      }
      connections {
        id
        name
        email
        location {
          latitude
          longitude
          __typename
        }
        skills {
          id
          name
          __typename
        }
        events {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        recommendedEvents {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        posts {
          id
          content
          createdAt
          __typename
        }
        connections {
          id
          name
          email
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getAllUsers = /* GraphQL */ `
  query GetAllUsers {
    getAllUsers {
      id
      name
      email
      location {
        latitude
        longitude
        __typename
      }
      skills {
        id
        name
        __typename
      }
      events {
        id
        name
        description
        location {
          latitude
          longitude
          __typename
        }
        attendees {
          id
          name
          email
          __typename
        }
        startTime
        endTime
        __typename
      }
      recommendedEvents {
        id
        name
        description
        location {
          latitude
          longitude
          __typename
        }
        attendees {
          id
          name
          email
          __typename
        }
        startTime
        endTime
        __typename
      }
      posts {
        id
        content
        author {
          id
          name
          email
          __typename
        }
        createdAt
        __typename
      }
      connections {
        id
        name
        email
        location {
          latitude
          longitude
          __typename
        }
        skills {
          id
          name
          __typename
        }
        events {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        recommendedEvents {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        posts {
          id
          content
          createdAt
          __typename
        }
        connections {
          id
          name
          email
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      __typename
    }
  }
`;
export const getAllSkills = /* GraphQL */ `
  query GetAllSkills {
    getAllSkills {
      id
      name
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      description
      location {
        latitude
        longitude
        __typename
      }
      attendees {
        id
        name
        email
        location {
          latitude
          longitude
          __typename
        }
        skills {
          id
          name
          __typename
        }
        events {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        recommendedEvents {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        posts {
          id
          content
          createdAt
          __typename
        }
        connections {
          id
          name
          email
          __typename
        }
        __typename
      }
      startTime
      endTime
      __typename
    }
  }
`;
export const getAllEvents = /* GraphQL */ `
  query GetAllEvents {
    getAllEvents {
      id
      name
      description
      location {
        latitude
        longitude
        __typename
      }
      attendees {
        id
        name
        email
        location {
          latitude
          longitude
          __typename
        }
        skills {
          id
          name
          __typename
        }
        events {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        recommendedEvents {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        posts {
          id
          content
          createdAt
          __typename
        }
        connections {
          id
          name
          email
          __typename
        }
        __typename
      }
      startTime
      endTime
      __typename
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      content
      author {
        id
        name
        email
        location {
          latitude
          longitude
          __typename
        }
        skills {
          id
          name
          __typename
        }
        events {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        recommendedEvents {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        posts {
          id
          content
          createdAt
          __typename
        }
        connections {
          id
          name
          email
          __typename
        }
        __typename
      }
      createdAt
      __typename
    }
  }
`;
export const getAllPosts = /* GraphQL */ `
  query GetAllPosts {
    getAllPosts {
      id
      content
      author {
        id
        name
        email
        location {
          latitude
          longitude
          __typename
        }
        skills {
          id
          name
          __typename
        }
        events {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        recommendedEvents {
          id
          name
          description
          startTime
          endTime
          __typename
        }
        posts {
          id
          content
          createdAt
          __typename
        }
        connections {
          id
          name
          email
          __typename
        }
        __typename
      }
      createdAt
      __typename
    }
  }
`;
