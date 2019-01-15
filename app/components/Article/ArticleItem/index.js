/*
 * @flow
 */
import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Grid, Col, Row } from 'native-base';
import { Image, TouchableOpacity } from 'react-native';

type Props = {
  typeOfMaterial: string,
  headline: string,
  image: string,
  bylineOriginal: string,
  pubDate: string,
  webUrl: string,
  onPress: (webUrl: string) => void
};

export default class ArticleItem extends Component<Props> {
  render() {
    const {
      typeOfMaterial,
      headline,
      image,
      bylineOriginal,
      pubDate,
      webUrl,
      onPress
    } = this.props;

    return (
      <TouchableOpacity onPress={() => onPress(webUrl)}>
        <Card>
          <CardItem header>
            <Text>{typeOfMaterial}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Grid>
                <Col><Text>{headline}</Text></Col>
                { image.length > 0 && <Col><Image source={{ uri: image }} /></Col> }
              </Grid>
            </Body>
          </CardItem>
          <CardItem footer>
            <Grid>
              <Row><Text>{bylineOriginal}</Text></Row>
              <Row><Text>{pubDate}</Text></Row>
            </Grid>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}
