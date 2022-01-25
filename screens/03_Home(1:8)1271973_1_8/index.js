import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eff6/8647/f19495b5ef512f21f81a03fbec146dfd"
        }}
        style={styles.ImageBackground_9_739}
      />
      <View style={styles.View_9_689}>
        <View style={styles.View_I9_689_9_653} />
        <View style={styles.View_I9_689_9_658}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8767/5790/6b7b4c805aef1293d0173effadecadf6"
            }}
            style={styles.ImageBackground_I9_689_9_659}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b81/843f/2074ecb78b933ae2dfe895e1affaec7a"
            }}
            style={styles.ImageBackground_I9_689_9_663}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3c15/8f2b/0490361ab74ccb4989d0ed026428146e"
            }}
            style={styles.ImageBackground_I9_689_9_664}
          />
        </View>
        <View style={styles.View_I9_689_9_665}>
          <View style={styles.View_I9_689_9_668}>
            <View style={styles.View_I9_689_9_669}>
              <Text style={styles.Text_I9_689_9_669}>9:41</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_9_719}>
        <View style={styles.View_I9_719_9_706}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d099/11ff/8c48d4d8b02db601d27672a95ac37850"
            }}
            style={styles.ImageBackground_I9_719_9_707}
          />
        </View>
      </View>
      <View style={styles.View_9_741}>
        <Text style={styles.Text_9_741}>Welcome</Text>
      </View>
      <View style={styles.View_9_746}>
        <Text style={styles.Text_9_746}>Tyler Miller!</Text>
      </View>
      <View style={styles.View_9_763}>
        <Text style={styles.Text_9_763}>What are you looking for?</Text>
      </View>
      <View style={styles.View_9_752}>
        <Text style={styles.Text_9_752}>
          Find a top rated local pro for your project
        </Text>
      </View>
      <View style={styles.View_9_753} />
      <View style={styles.View_9_754} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/576c/28fb/e0306b64346c87b91844fe19e8e5e1b5"
        }}
        style={styles.ImageBackground_9_759}
      />
      <View style={styles.View_9_762}>
        <Text style={styles.Text_9_762}>Search professionals</Text>
      </View>
      <View style={styles.View_14_766} />
      <View style={styles.View_16_39} />
      <View style={styles.View_18_218} />
      <View style={styles.View_18_776} />
      <View style={styles.View_16_36} />
      <View style={styles.View_16_40} />
      <View style={styles.View_16_37} />
      <View style={styles.View_16_41} />
      <View style={styles.View_16_38} />
      <View style={styles.View_16_42} />
      <View style={styles.View_16_88}>
        <Text style={styles.Text_16_88}>Cabinets</Text>
      </View>
      <View style={styles.View_16_89}>
        <Text style={styles.Text_16_89}>Cleaning</Text>
      </View>
      <View style={styles.View_16_90}>
        <Text style={styles.Text_16_90}>Maid</Text>
      </View>
      <View style={styles.View_16_91}>
        <Text style={styles.Text_16_91}>Paint</Text>
      </View>
      <View style={styles.View_16_43}>
        <Text style={styles.Text_16_43}>Remodeling</Text>
      </View>
      <View style={styles.View_16_61}>
        <Text style={styles.Text_16_61}>Cooling</Text>
      </View>
      <View style={styles.View_16_86}>
        <Text style={styles.Text_16_86}>Appliance</Text>
      </View>
      <View style={styles.View_16_87}>
        <Text style={styles.Text_16_87}>Bricks</Text>
      </View>
      <View style={styles.View_16_85}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27da/751f/45f41749abcf4aab1e00630436629e92"
          }}
          style={styles.ImageBackground_16_80}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc37/09b5/62c3480bea515ece79ea75f0fc45f900"
          }}
          style={styles.ImageBackground_16_82}
        />
      </View>
      <View style={styles.View_16_125}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/693c/4dff/1ab59680b1f1da0ef8d82201f34a7408"
          }}
          style={styles.ImageBackground_16_70}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/23e2/a800/b30b79741b17282a5af2c4b12fe184a7"
          }}
          style={styles.ImageBackground_16_124}
        />
        <View style={styles.View_16_123}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b835/1866/6d05b2f2d6b4974415a6d3071330f02a"
            }}
            style={styles.ImageBackground_16_98}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4435/0541/9dac5f7817f9a3711f8a9ae88853c292"
            }}
            style={styles.ImageBackground_16_100}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d556/26ff/d3eeb5fc5fdb3867eac9d6922988c39f"
            }}
            style={styles.ImageBackground_16_103}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0538/24a4/7f7d666baa02ab8a6ba38c861b9e1de2"
            }}
            style={styles.ImageBackground_16_106}
          />
        </View>
      </View>
      <View style={styles.View_16_134}>
        <View style={styles.View_16_127}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5d71/cc19/999a2bbb8618f15cacba219db7e427b8"
            }}
            style={styles.ImageBackground_16_128}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa98/7bee/884c7ad7c2b6beaf086a97e63148716b"
            }}
            style={styles.ImageBackground_16_130}
          />
        </View>
      </View>
      <View style={styles.View_16_182}>
        <View style={styles.View_16_180}>
          <View style={styles.View_16_178}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b545/a5b9/7bdc5f99a7f2309c50b53a30fb37c272"
              }}
              style={styles.ImageBackground_16_174}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c83/2331/c6b56061eceded51fa953d8ff6ceeb88"
            }}
            style={styles.ImageBackground_16_179}
          />
        </View>
        <View style={styles.View_16_181} />
      </View>
      <View style={styles.View_16_192}>
        <View style={styles.View_16_184}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d85c/a3b0/bc86872d9e43bf852beb7f4016a0d3a5"
            }}
            style={styles.ImageBackground_16_185}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e8/3f6c/267e1d436a917d0ea7eea096242e8b3b"
            }}
            style={styles.ImageBackground_16_187}
          />
        </View>
      </View>
      <View style={styles.View_18_199}>
        <View style={styles.View_18_194}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00b5/7b98/4dab3219129f3a566f233959279b91ac"
            }}
            style={styles.ImageBackground_18_195}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ae34/395b/34c931f5b8ed8bb53f6930d4494a8cb5"
            }}
            style={styles.ImageBackground_18_197}
          />
        </View>
      </View>
      <View style={styles.View_18_208}>
        <View style={styles.View_18_201}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3265/357a/72ed20c6eae13d960ae8cf383f925de1"
            }}
            style={styles.ImageBackground_18_202}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3b69/0bc5/4ad89e92f71ccde12bb12cac184b3497"
            }}
            style={styles.ImageBackground_18_204}
          />
        </View>
      </View>
      <View style={styles.View_18_215}>
        <View style={styles.View_18_210}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/425c/c77a/ebae98a1b150b3a63f183977513ff368"
            }}
            style={styles.ImageBackground_18_211}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e057/5a2d/c71b95697af75d378b9e831ebe690bf2"
            }}
            style={styles.ImageBackground_18_213}
          />
        </View>
      </View>
      <View style={styles.View_18_217}>
        <Text style={styles.Text_18_217}>Find the best fixer</Text>
      </View>
      <View style={styles.View_18_227}>
        <View style={styles.View_18_771}>
          <View style={styles.View_18_226}>
            <View style={styles.View_18_224}>
              <Text style={styles.Text_18_224}>Explore More</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2deb/fefd/df26ac7eaf41bb44a2da29bf40170a24"
              }}
              style={styles.ImageBackground_18_225}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_18_766}>
        <View style={styles.View_I18_766_18_771}>
          <View style={styles.View_I18_766_18_226}>
            <View style={styles.View_I18_766_18_224}>
              <Text style={styles.Text_I18_766_18_224}>View All</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2deb/fefd/df26ac7eaf41bb44a2da29bf40170a24"
              }}
              style={styles.ImageBackground_I18_766_18_225}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_18_788}>
        <View style={styles.View_I18_788_18_771}>
          <View style={styles.View_I18_788_18_226}>
            <View style={styles.View_I18_788_18_224}>
              <Text style={styles.Text_I18_788_18_224}>Hire plumber</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2deb/fefd/df26ac7eaf41bb44a2da29bf40170a24"
              }}
              style={styles.ImageBackground_I18_788_18_225}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_18_327}>
        <View style={styles.View_I18_327_18_220}>
          <Text style={styles.Text_I18_327_18_220}>Guy Hawkins</Text>
        </View>
        <View style={styles.View_I18_327_18_221}>
          <Text style={styles.Text_I18_327_18_221}>
            Universal Plumbing Services
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4767/e9ce/34dd74f147fd1586eb2db1d611ae373a"
          }}
          style={styles.ImageBackground_I18_327_18_219}
        />
        <View style={styles.View_I18_327_18_324}>
          <View style={styles.View_I18_327_18_324_18_222}>
            <Text style={styles.Text_I18_327_18_324_18_222}>Plumber</Text>
          </View>
        </View>
        <View style={styles.View_I18_327_18_290}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
            }}
            style={styles.ImageBackground_I18_327_18_290_18_271}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
            }}
            style={styles.ImageBackground_I18_327_18_290_18_272}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
            }}
            style={styles.ImageBackground_I18_327_18_290_18_273}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
            }}
            style={styles.ImageBackground_I18_327_18_290_18_274}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
            }}
            style={styles.ImageBackground_I18_327_18_290_18_275}
          />
          <View style={styles.View_I18_327_18_290_18_288}>
            <View style={styles.View_I18_327_18_290_18_287}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                }}
                style={styles.ImageBackground_I18_327_18_290_18_239}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                }}
                style={styles.ImageBackground_I18_327_18_290_18_242}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                }}
                style={styles.ImageBackground_I18_327_18_290_18_245}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                }}
                style={styles.ImageBackground_I18_327_18_290_18_248}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                }}
                style={styles.ImageBackground_I18_327_18_290_18_251}
              />
            </View>
            <View style={styles.View_I18_327_18_290_18_286} />
          </View>
        </View>
      </View>
      <View style={styles.View_18_367}>
        <View style={styles.View_I18_367_18_220}>
          <Text style={styles.Text_I18_367_18_220}>Courtney Henry</Text>
        </View>
        <View style={styles.View_I18_367_18_221}>
          <Text style={styles.Text_I18_367_18_221}>
            Universal Plumbing Services
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b63e/0411/4650e01b1b384fc768f167922d9f9f1d"
          }}
          style={styles.ImageBackground_I18_367_18_219}
        />
        <View style={styles.View_I18_367_18_324}>
          <View style={styles.View_I18_367_18_324_18_222}>
            <Text style={styles.Text_I18_367_18_324_18_222}>Cleaning</Text>
          </View>
        </View>
        <View style={styles.View_I18_367_18_290}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
            }}
            style={styles.ImageBackground_I18_367_18_290_18_271}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
            }}
            style={styles.ImageBackground_I18_367_18_290_18_272}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
            }}
            style={styles.ImageBackground_I18_367_18_290_18_273}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
            }}
            style={styles.ImageBackground_I18_367_18_290_18_274}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
            }}
            style={styles.ImageBackground_I18_367_18_290_18_275}
          />
          <View style={styles.View_I18_367_18_290_18_288}>
            <View style={styles.View_I18_367_18_290_18_287}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                }}
                style={styles.ImageBackground_I18_367_18_290_18_239}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                }}
                style={styles.ImageBackground_I18_367_18_290_18_242}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                }}
                style={styles.ImageBackground_I18_367_18_290_18_245}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                }}
                style={styles.ImageBackground_I18_367_18_290_18_248}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                }}
                style={styles.ImageBackground_I18_367_18_290_18_251}
              />
            </View>
            <View style={styles.View_I18_367_18_290_18_286} />
          </View>
        </View>
      </View>
      <View style={styles.View_18_488}>
        <View style={styles.View_18_447} />
        <View style={styles.View_18_448}>
          <View style={styles.View_I18_448_18_220}>
            <Text style={styles.Text_I18_448_18_220}>Jane Cooper</Text>
          </View>
          <View style={styles.View_I18_448_18_221}>
            <Text style={styles.Text_I18_448_18_221}>
              Universal Plumbing Services
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21fc/f5c1/256394b1ac3d875bb4f08d921088ecf9"
            }}
            style={styles.ImageBackground_I18_448_18_219}
          />
          <View style={styles.View_I18_448_18_324}>
            <View style={styles.View_I18_448_18_324_18_222}>
              <Text style={styles.Text_I18_448_18_324_18_222}>Maid</Text>
            </View>
          </View>
          <View style={styles.View_I18_448_18_290}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
              }}
              style={styles.ImageBackground_I18_448_18_290_18_271}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
              }}
              style={styles.ImageBackground_I18_448_18_290_18_272}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
              }}
              style={styles.ImageBackground_I18_448_18_290_18_273}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
              }}
              style={styles.ImageBackground_I18_448_18_290_18_274}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f3fe/5de6/45e311f0112bac66fbf78259cb3d6540"
              }}
              style={styles.ImageBackground_I18_448_18_290_18_275}
            />
            <View style={styles.View_I18_448_18_290_18_288}>
              <View style={styles.View_I18_448_18_290_18_287}>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                  }}
                  style={styles.ImageBackground_I18_448_18_290_18_239}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                  }}
                  style={styles.ImageBackground_I18_448_18_290_18_242}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                  }}
                  style={styles.ImageBackground_I18_448_18_290_18_245}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                  }}
                  style={styles.ImageBackground_I18_448_18_290_18_248}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6bd9/4f6b/bc5aeeea13309dcb11c40e8df73b60a9"
                  }}
                  style={styles.ImageBackground_I18_448_18_290_18_251}
                />
              </View>
              <View style={styles.View_I18_448_18_290_18_286} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_18_777}>
        <Text style={styles.Text_18_777}>Free Estimates </Text>
      </View>
      <View style={styles.View_18_778}>
        <Text style={styles.Text_18_778}>for plumbing services</Text>
      </View>
      <View style={styles.View_18_787}>
        <View style={styles.View_18_780}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cf9/8fbd/9677df4e15cd0c1e4af1f06eff7caed4"
            }}
            style={styles.ImageBackground_18_781}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d388/8258/5944a45cc65a2fa0d0795cc3da4c73d0"
            }}
            style={styles.ImageBackground_18_783}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fc2e/555b/706662ab71abb907d7b9def2fb0845e4"
        }}
        style={styles.ImageBackground_18_797}
      />
      <View style={styles.View_18_847}>
        <View style={styles.View_18_849} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6b3/4029/8ce6f5eaa5b198691fda75c7283673f8"
          }}
          style={styles.ImageBackground_18_803}
        />
        <View style={styles.View_18_842}>
          <Text style={styles.Text_18_842}>Home</Text>
        </View>
        <View style={styles.View_18_843}>
          <Text style={styles.Text_18_843}>Services</Text>
        </View>
        <View style={styles.View_18_844}>
          <Text style={styles.Text_18_844}>Fixer</Text>
        </View>
        <View style={styles.View_18_846}>
          <Text style={styles.Text_18_846}>Search</Text>
        </View>
        <View style={styles.View_18_845}>
          <Text style={styles.Text_18_845}>Profile</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/20e6/cb7a/e1c04f6f05677b66ebaf0a4f47a5997c"
          }}
          style={styles.ImageBackground_18_804}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd4d/70b8/561ebdcee6e7b43a1413ea232d6681a6"
          }}
          style={styles.ImageBackground_18_805}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cc0c/6d0f/8ef134bfa31d79970de43c31c90be227"
          }}
          style={styles.ImageBackground_18_807}
        />
        <View style={styles.View_18_821}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da39/a3ee/5e6b4b0d3255bfef95601890afd80709"
            }}
            style={styles.ImageBackground_I18_821_18_814}
          />
          <View style={styles.View_I18_821_18_816}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ddf9/3d1c/b093ace7184e7cda7cb016dee8e11964"
              }}
              style={styles.ImageBackground_I18_821_18_817}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9ab9/9d76/b5be83193e2b5bdf8bae12b088e10f52"
          }}
          style={styles.ImageBackground_18_832}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b520/4c55/5f5d92c04e95e41bd932cfd99f748ad8"
          }}
          style={styles.ImageBackground_18_839}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("186%") },
  ImageBackground_9_739: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_9_689: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I9_689_9_653: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("0%")
  },
  View_I9_689_9_658: {
    flexGrow: 1,
    width: wp("18%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I9_689_9_659: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_I9_689_9_663: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I9_689_9_664: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I9_689_9_665: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I9_689_9_668: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(52, 199, 89, 1)"
  },
  View_I9_689_9_669: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I9_689_9_669: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_9_719: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I9_719_9_706: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I9_719_9_707: {
    width: wp("34%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_9_741: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_9_741: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "uppercase"
  },
  View_9_746: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("19%"),
    justifyContent: "flex-start"
  },
  Text_9_746: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 26,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_9_763: {
    width: wp("73%"),
    minWidth: wp("73%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("44%"),
    justifyContent: "flex-start"
  },
  Text_9_763: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_9_752: {
    width: wp("82%"),
    minWidth: wp("82%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_9_752: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_9_753: {
    width: wp("77%"),
    minWidth: wp("77%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("29%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_9_754: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  ImageBackground_9_759: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("86%")
  },
  View_9_762: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_9_762: {
    color: "rgba(115, 115, 115, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_14_766: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_16_39: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("64%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_18_218: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("78%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_18_776: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("130%"),
    backgroundColor: "rgba(254, 199, 11, 1)"
  },
  View_16_36: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_16_40: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("64%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_16_37: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_16_41: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("64%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_16_38: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("52%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_16_42: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("64%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_16_88: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_16_88: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_16_89: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_16_89: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_16_90: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_16_90: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_16_91: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("70%"),
    justifyContent: "flex-start"
  },
  Text_16_91: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_16_43: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_16_43: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_16_61: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_16_61: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_16_86: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_16_86: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_16_87: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("58%"),
    justifyContent: "flex-start"
  },
  Text_16_87: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_16_85: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("53%")
  },
  ImageBackground_16_80: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_16_82: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_16_125: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("53%")
  },
  ImageBackground_16_70: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_16_124: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_16_123: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_16_98: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_16_100: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_16_103: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_16_106: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_16_134: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    top: hp("53%")
  },
  View_16_127: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_16_128: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_16_130: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_16_182: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%"),
    top: hp("53%")
  },
  View_16_180: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_16_178: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_16_174: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_16_179: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_16_181: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    backgroundColor: "rgba(254, 199, 11, 1)"
  },
  View_16_192: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("66%")
  },
  View_16_184: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_16_185: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_16_187: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_199: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("66%")
  },
  View_18_194: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_195: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_197: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_208: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("66%")
  },
  View_18_201: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_202: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_18_204: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_215: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("66%")
  },
  View_18_210: {
    width: wp("6%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_211: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_18_213: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_217: {
    width: wp("49%"),
    minWidth: wp("49%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("82%"),
    justifyContent: "flex-start"
  },
  Text_18_217: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_18_227: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_771: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 237, 176, 1)"
  },
  View_18_226: {
    width: wp("21%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_18_224: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_18_224: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_18_225: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_766: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("118%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I18_766_18_771: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 237, 176, 1)"
  },
  View_I18_766_18_226: {
    width: wp("14%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%")
  },
  View_I18_766_18_224: {
    width: wp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I18_766_18_224: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_I18_766_18_225: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_788: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("158%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I18_788_18_771: {
    flexGrow: 1,
    width: wp("30%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 237, 176, 1)"
  },
  View_I18_788_18_226: {
    width: wp("21%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_I18_788_18_224: {
    width: wp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_I18_788_18_224: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  ImageBackground_I18_788_18_225: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_18_327: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I18_327_18_220: {
    flexGrow: 1,
    width: wp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_I18_327_18_220: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I18_327_18_221: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_I18_327_18_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I18_327_18_219: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I18_327_18_324: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    backgroundColor: "rgba(254, 199, 11, 1)"
  },
  View_I18_327_18_324_18_222: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I18_327_18_324_18_222: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I18_327_18_290: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I18_327_18_290_18_271: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I18_327_18_290_18_272: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I18_327_18_290_18_273: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I18_327_18_290_18_274: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_I18_327_18_290_18_275: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_I18_327_18_290_18_288: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I18_327_18_290_18_287: {
    width: wp("15%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I18_327_18_290_18_239: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I18_327_18_290_18_242: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I18_327_18_290_18_245: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I18_327_18_290_18_248: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_I18_327_18_290_18_251: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I18_327_18_290_18_286: {
    width: wp("15%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 199, 11, 1)"
  },
  View_18_367: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I18_367_18_220: {
    flexGrow: 1,
    width: wp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_I18_367_18_220: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I18_367_18_221: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_I18_367_18_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I18_367_18_219: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I18_367_18_324: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    backgroundColor: "rgba(254, 199, 11, 1)"
  },
  View_I18_367_18_324_18_222: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I18_367_18_324_18_222: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I18_367_18_290: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I18_367_18_290_18_271: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I18_367_18_290_18_272: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I18_367_18_290_18_273: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I18_367_18_290_18_274: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_I18_367_18_290_18_275: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_I18_367_18_290_18_288: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I18_367_18_290_18_287: {
    width: wp("15%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I18_367_18_290_18_239: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I18_367_18_290_18_242: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I18_367_18_290_18_245: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I18_367_18_290_18_248: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_I18_367_18_290_18_251: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I18_367_18_290_18_286: {
    width: wp("15%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 199, 11, 1)"
  },
  View_18_488: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("87%")
  },
  View_18_447: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  View_18_448: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("30%"),
    minHeight: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I18_448_18_220: {
    flexGrow: 1,
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_I18_448_18_220: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I18_448_18_221: {
    flexGrow: 1,
    width: wp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_I18_448_18_221: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I18_448_18_219: {
    flexGrow: 1,
    width: wp("34%"),
    height: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I18_448_18_324: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("17%"),
    backgroundColor: "rgba(254, 199, 11, 1)"
  },
  View_I18_448_18_324_18_222: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_I18_448_18_324_18_222: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_I18_448_18_290: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I18_448_18_290_18_271: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I18_448_18_290_18_272: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_I18_448_18_290_18_273: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_I18_448_18_290_18_274: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_I18_448_18_290_18_275: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%")
  },
  View_I18_448_18_290_18_288: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I18_448_18_290_18_287: {
    width: wp("15%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I18_448_18_290_18_239: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I18_448_18_290_18_242: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I18_448_18_290_18_245: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I18_448_18_290_18_248: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_I18_448_18_290_18_251: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_I18_448_18_290_18_286: {
    width: wp("15%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(254, 199, 11, 1)"
  },
  View_18_777: {
    width: wp("75%"),
    minWidth: wp("75%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("142%"),
    justifyContent: "flex-start"
  },
  Text_18_777: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 35,
    fontWeight: "800",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_18_778: {
    width: wp("44%"),
    minWidth: wp("44%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("153%"),
    justifyContent: "flex-start"
  },
  Text_18_778: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.5,
    textTransform: "none"
  },
  View_18_787: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("134%")
  },
  View_18_780: {
    width: wp("18%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_781: {
    width: wp("9%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_18_783: {
    width: wp("18%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_797: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%")
  },
  View_18_847: {
    width: wp("91%"),
    minWidth: wp("91%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("170%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_18_849: {
    flexGrow: 1,
    width: wp("99%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-4%"),
    top: hp("0%")
  },
  ImageBackground_18_803: {
    flexGrow: 1,
    width: wp("87%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%")
  },
  View_18_842: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_18_842: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_18_843: {
    flexGrow: 1,
    width: wp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_18_843: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_18_844: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_18_844: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_18_846: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_18_846: {
    color: "rgba(22, 22, 22, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  View_18_845: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_18_845: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 6,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  ImageBackground_18_804: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("0%")
  },
  ImageBackground_18_805: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("2%")
  },
  ImageBackground_18_807: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("6%")
  },
  View_18_821: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I18_821_18_814: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I18_821_18_816: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I18_821_18_817: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_18_832: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%")
  },
  ImageBackground_18_839: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("6%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
