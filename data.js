var APP_DATA = {
  "scenes": [
    {
      "id": "0-extpuerta",
      "name": "ExtPuerta",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.06996179996651,
        "pitch": -0.1088458422731069,
        "fov": 1.43416210789885
      },
      "linkHotspots": [
        {
          "yaw": 3.10218259246298,
          "pitch": -0.006107164587636049,
          "rotation": 0,
          "target": "1-planta-baja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-planta-baja",
      "name": "Planta baja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.109097121250005,
        "pitch": 0.05974664863219914,
        "fov": 1.43416210789885
      },
      "linkHotspots": [
        {
          "yaw": -3.0917650846626863,
          "pitch": 0.03606328346361565,
          "rotation": 0,
          "target": "2-piso"
        },
        {
          "yaw": -0.2565728870420916,
          "pitch": 0.1790385407534245,
          "rotation": 0,
          "target": "0-extpuerta"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-piso",
      "name": "Piso",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9031148570531577,
          "pitch": 0.1282888169424119,
          "rotation": 0,
          "target": "3-entrada"
        },
        {
          "yaw": 0.07813470463139716,
          "pitch": -0.1855067282842242,
          "rotation": 9.42477796076938,
          "target": "1-planta-baja"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-entrada",
      "name": "Entrada",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.005342844648982492,
          "pitch": 0.15988969446170032,
          "rotation": 0,
          "target": "4-entrada-2"
        },
        {
          "yaw": -2.943493064228891,
          "pitch": 0.06148212428500344,
          "rotation": 1.5707963267948966,
          "target": "2-piso"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-entrada-2",
      "name": "Entrada 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.016261578392159,
          "pitch": 0.13155329615226563,
          "rotation": 1.5707963267948966,
          "target": "8-cocina"
        },
        {
          "yaw": -3.1333143303949367,
          "pitch": 0.07001405209425471,
          "rotation": 0,
          "target": "3-entrada"
        },
        {
          "yaw": -0.6914242457874842,
          "pitch": 0.11745317951093526,
          "rotation": 14.137166941154074,
          "target": "5-recmara-1"
        },
        {
          "yaw": -1.4794983191727518,
          "pitch": 0.0810045375861268,
          "rotation": 0,
          "target": "7-bao"
        },
        {
          "yaw": -1.8996256467134387,
          "pitch": 0.15880019080967855,
          "rotation": 10.995574287564278,
          "target": "6-recmara-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-recmara-1",
      "name": "Recámara 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.1790127541138755,
        "pitch": 0.08963513174368387,
        "fov": 1.43416210789885
      },
      "linkHotspots": [
        {
          "yaw": -0.37849282514670435,
          "pitch": 0.10093115283147647,
          "rotation": 6.283185307179586,
          "target": "4-entrada-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-recmara-2",
      "name": "Recámara 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.2573063742662987,
        "pitch": 0.05460855093655681,
        "fov": 1.43416210789885
      },
      "linkHotspots": [
        {
          "yaw": -2.530767787047136,
          "pitch": 0.09439799331722654,
          "rotation": 4.71238898038469,
          "target": "4-entrada-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-bao",
      "name": "Baño",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.0743443032205846,
        "pitch": -0.025072947940252277,
        "fov": 1.43416210789885
      },
      "linkHotspots": [
        {
          "yaw": -1.5242052659239498,
          "pitch": 0.3272338229292835,
          "rotation": 3.141592653589793,
          "target": "4-entrada-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-cocina",
      "name": "Cocina",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7951327716464682,
        "pitch": 0.2915527251297352,
        "fov": 1.43416210789885
      },
      "linkHotspots": [
        {
          "yaw": 1.420750839308372,
          "pitch": 0.24192730345294144,
          "rotation": 0,
          "target": "9-sala"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-sala",
      "name": "Sala",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7333298027411654,
        "pitch": -0.013946461353226525,
        "fov": 1.43416210789885
      },
      "linkHotspots": [
        {
          "yaw": 2.2466419795691674,
          "pitch": 0.12218701694421163,
          "rotation": 0,
          "target": "4-entrada-2"
        },
        {
          "yaw": 1.5233651817361,
          "pitch": 0.08616057862600535,
          "rotation": 0,
          "target": "8-cocina"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "CCyB",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
