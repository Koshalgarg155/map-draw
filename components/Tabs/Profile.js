import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import { Avatar, Icon, Button, SocialIcon, ListItem } from '@rneui/themed';
export default function Profile() {
    return (
        <View>
            <Image
                style={{
                    height: '30%',
                    marginBottom: '20%'
                }}
                blurRadius={5} />
            <View style={{
                textAlign: "center",
                paddingVertical: 5,
                marginBottom: 10,
                position: 'absolute',
                top: 100,
                left: 140,
                right: 0,
                bottom: 0
            }}>
                <Avatar
                    size={150}
                    rounded
                    source={{ uri: 'https://randomuser.me/api/portraits/men/36.jpg' }}
                    key='12345'
                />
            </View>
            <Text style={{ fontSize: 30, fontWeight: '700', marginTop: 10, textAlign: "center", alignItems: 'center', justifyContent: 'center' }}>John Doe</Text>
            <View style={{ marginTop: 0 }}>
                <Button type="clear">
                    Edit Profile
                    <Icon name="edit" />
                </Button>
            </View>
            <ScrollView>
                <View style={{ marginTop: 20 }}>
                    <ListItem bottomDivider>
                        <Icon name="payment" />
                        <ListItem.Content>
                            <ListItem.Title>Payment Details</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem bottomDivider>
                        <Icon name="history" />
                        <ListItem.Content>
                            <ListItem.Title>Order History</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem bottomDivider>
                        <Icon name="settings" />
                        <ListItem.Content>
                            <ListItem.Title>Notification Settings</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>
                    <ListItem bottomDivider>
                        <Icon name="edit" />
                        <ListItem.Content>
                            <ListItem.Title>Privacy Settings</ListItem.Title>
                        </ListItem.Content>
                    </ListItem>


                </View>
            </ScrollView>


        </View>
    )
}