import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function VotingBlock({ data }) {
  return (
    <View style={{ marginTop: 60 }}>
      {/* <View style={{ flexDirection: 'row' }}>
        <Icon name="google" size={30} color="#ccc" style={{ marginLeft: 60 }} />
        <Icon
          name="windows"
          size={30}
          color="#ccc"
          style={{ marginLeft: 20 }}
        />
      </View> */}
      <View style={{ marginBottom: 60, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Icon
            name="google"
            size={30}
            color="#ccc"
            style={{ marginLeft: 60 }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              flex: 1,
              justifyContent: 'flex-start'
            }}
          >
            <Icon
              name="thumbs-up"
              size={22}
              color="#ccc"
              style={{ marginLeft: 30 }}
            />
            <Icon
              name="thumbs-down"
              size={22}
              color="#ccc"
              style={{ marginLeft: 43 }}
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ marginLeft: 30 }}> 15 </Text>
            <Text style={{ marginLeft: 45 }}> 2 </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            marginRight: 50
          }}
        >
          <Text style={{ marginTop: 20 }}>
            DEMODEMODEMODEMODEMODEMODEMODEMODEMODEMODE
          </Text>
        </View>
      </View>
      <View style={{ marginBottom: 60, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Icon
            name="windows"
            size={30}
            color="#ccc"
            style={{ marginLeft: 60 }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              flex: 1,
              justifyContent: 'flex-start'
            }}
          >
            <Icon
              name="thumbs-up"
              size={22}
              color="#ccc"
              style={{ marginLeft: 30 }}
            />
            <Icon
              name="thumbs-down"
              size={22}
              color="#ccc"
              style={{ marginLeft: 43 }}
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ marginLeft: 30 }}> 10 </Text>
            <Text style={{ marginLeft: 45 }}> 1 </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            marginRight: 50
          }}
        >
          <Text style={{ marginTop: 20 }}>
            DEMODEMODEMODEMODEMODEMODEMODEMODEMODEMODE
          </Text>
        </View>
      </View>
      <View style={{ marginBottom: 60, flexDirection: 'row' }}>
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
          <Icon
            name="users"
            size={30}
            color="#ccc"
            style={{ marginLeft: 60 }}
          />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              flex: 1,
              justifyContent: 'flex-start'
            }}
          >
            <Icon
              name="thumbs-up"
              size={22}
              color="#ccc"
              style={{ marginLeft: 30 }}
            />
            <Icon
              name="thumbs-down"
              size={22}
              color="#ccc"
              style={{ marginLeft: 43 }}
            />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 15 }}>
            <Text style={{ marginLeft: 30 }}> 1 </Text>
            <Text style={{ marginLeft: 50 }}> 0 </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flex: 1,
            justifyContent: 'flex-end',
            marginRight: 50
          }}
        >
          <Text style={{ marginTop: 20 }}>
            DEMODEMODEMODEMODEMODEMODEMODEMODEMODEMODE
          </Text>
        </View>
      </View>
    </View>
  );
}
