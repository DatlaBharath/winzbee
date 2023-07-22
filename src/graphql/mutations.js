/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
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
export const addSkillToUser = /* GraphQL */ `
  mutation AddSkillToUser($userId: ID!, $skillId: ID!) {
    addSkillToUser(userId: $userId, skillId: $skillId) {
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
export const setMindsetToUser = /* GraphQL */ `
  mutation SetMindsetToUser($userId: ID!, $mindsetId: ID!) {
    setMindsetToUser(userId: $userId, mindsetId: $mindsetId) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $name: String!
    $description: String!
    $startTime: String!
    $endTime: String!
  ) {
    createEvent(
      name: $name
      description: $description
      startTime: $startTime
      endTime: $endTime
    ) {
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
export const addAttendeeToEvent = /* GraphQL */ `
  mutation AddAttendeeToEvent($eventId: ID!, $userId: ID!) {
    addAttendeeToEvent(eventId: $eventId, userId: $userId) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost($content: String!) {
    createPost(content: $content) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost($postId: ID!) {
    deletePost(postId: $postId)
  }
`;
export const sendConnectionRequest = /* GraphQL */ `
  mutation SendConnectionRequest($userId: ID!) {
    sendConnectionRequest(userId: $userId)
  }
`;
export const acceptConnectionRequest = /* GraphQL */ `
  mutation AcceptConnectionRequest($userId: ID!) {
    acceptConnectionRequest(userId: $userId)
  }
`;
