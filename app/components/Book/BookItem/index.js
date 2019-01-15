/*
 * @flow
 */
import React, { Component } from 'react';
import { Card, CardItem, Body, Text, Grid, Row } from 'native-base';
import { TouchableOpacity } from 'react-native';

type Props = {
  title: string,
  description: string,
  author: string,
  publishedDate: string,
  productUrl: string,
  onPress: (productUrl: string) => void
};

export default class BookItem extends Component<Props> {
  render() {
    const {
      title,
      description,
      author,
      publishedDate,
      productUrl,
      onPress
    } = this.props;

    return (
      <TouchableOpacity onPress={() => onPress(productUrl)}>
        <Card>
          <CardItem header>
            <Text>{title}</Text>
          </CardItem>
          <CardItem>
            <Body><Text>{description}</Text></Body>
          </CardItem>
          <CardItem footer>
            <Grid>
              <Row><Text>{author}</Text></Row>
              <Row><Text>{publishedDate}</Text></Row>
            </Grid>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}
