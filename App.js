import React, {Component} from 'react';
import {View, StyleSheet, Button} from 'react-native';
import {
  HMSBanner,
  BannerAdSizes,
  HMSNative,
  HMSInterstitial,
  HMSSplash,
} from '@hmscore/react-native-hms-ads';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNativeAdVisible: false,
    };
  }
  _showInterstitialAd() {
    HMSInterstitial.isLoaded().then((result) => {
      if (result) {
        HMSInterstitial.show(); // if result is true show the ad
      }
    });
  }
  _showSplashAd() {
    HMSSplash.setAdId('testd7c5cewoj6');
    HMSSplash.show(); // if result is true show the ad
  }
  _showNativeAd = () => {
    this.setState({
      isNativeAdVisible: true,
    });
  };
  _hideNativeAd = () => {
    this.setState({
      isNativeAdVisible: false,
    });
  };
  render() {
    HMSInterstitial.setAdId('testb4znbuh3n2'); // video ad
    HMSInterstitial.loadAd();
    return (
      <View style={styles.main}>
        <View style={{flex: 1}}>
          <View style={{paddingTop: 10}}>
            <Button
              title="Show Interstitial Ads"
              onPress={this._showInterstitialAd}></Button>
          </View>
          <View style={{paddingTop: 10}}>
            {this.state.isNativeAdVisible ? (
              <Button title="Hide Native Ads" onPress={this._hideNativeAd} />
            ) : (
              <Button title="Show Native Ads" onPress={this._showNativeAd} />
            )}
          </View>
          <View style={{paddingTop: 10}}>
            <Button
              title="Show Splash Ads"
              onPress={this._showSplashAd}></Button>
          </View>
          {this.state.isNativeAdVisible ? (
            <HMSNative style={{height: 322}} />
          ) : null}
        </View>

        <View
          style={{
            flex: 1,
            paddingTop: 10,
            flexDirection: 'column-reverse',
          }}>
          <HMSBanner
            style={{height: 100}}
            bannerAdSize={{
              bannerAdSize: BannerAdSizes.B_DYNAMIC,
            }}
            adId="testw6vs28auh3"
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  main: {
    flex: 2,
  },
});

export default App;
