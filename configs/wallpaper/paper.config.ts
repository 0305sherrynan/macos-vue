
type wallPaperConfig = {
  name: string
  type: 'standalone' | 'automatic' | 'dynamic'
  thumbnail: string
  timestamps?: {
    wallpaper?: Record<number, string>
  }
}

const createWallPaperConfig = (wallPaperObj: Record<string, wallPaperConfig>): Record<string, wallPaperConfig> => {
  //批量导入图片
  const batchPictures = import.meta.glob('/assets/image/wallpapers/*.{webp,jpg}', {
    eager: true,
    query: { width: 2000, quality: 95, format: 'webp' }
  }) as Record<string, NodeModule>
  //获取所有图片的键值对
  const bPEntries = Object.entries(batchPictures)
  for (let [key, item] of Object.entries(wallPaperObj)) {
    //引用单个配置对象
    const concreteEachConfig = wallPaperObj[key]
    //将图片路径放入thumbnail属性上
    concreteEachConfig.thumbnail = (bPEntries.find(([path]) => path.includes(item.thumbnail)) as Array<any>)[1].default
    //对于动态图片的额外改动
    if (concreteEachConfig.timestamps && concreteEachConfig.timestamps.wallpaper) {
      for (let [keyDynamic, itemDynamic] of Object.entries(concreteEachConfig.timestamps.wallpaper)) {
        concreteEachConfig.timestamps.wallpaper[keyDynamic] = (bPEntries.find(([path]) => path.includes(itemDynamic)) as Array<any>)[1].default
      }
    }
  }
  return wallPaperObj
}


//wallpaper应用的数据
export const wallPaperObj = createWallPaperConfig({
  ventura: {
    name: 'Ventura',
    type: 'dynamic',

    thumbnail: 'ventura-2',
    timestamps: {
      wallpaper: {
        7: 'ventura-5',
        9: 'ventura-2',
        12: 'ventura-3',
        17: 'ventura-4',
        18: 'ventura-5',
        19: 'ventura-1',
      },
      // theme: {
      //   7: 'light',
      //   19: 'dark',
      // },
    },
  },

  monterey: {
    name: 'Monterey',
    type: 'dynamic',
    thumbnail: 'monterey-2',
    timestamps: {
      wallpaper: {
        7: 'monterey-2',
        9: 'monterey-3',
        11: 'monterey-4',
        13: 'monterey-5',
        15: 'monterey-6',
        16: 'monterey-7',
        17: 'monterey-8',
        18: 'monterey-1',
      },
      // theme: {
      //   7: 'light',
      //   18: 'dark',
      // },
    },
  },

  'big-sur-graphic': {
    name: 'Big Sur Graphic',
    type: 'dynamic',
    thumbnail: 'big-sur-graphic-2',
    timestamps: {
      wallpaper: {
        7: 'big-sur-graphic-2',
        18: 'big-sur-graphic-1',
      },
      // theme: {
      //   7: 'light',
      //   18: 'dark',
      // },
    },
  },

  'big-sur': {
    name: 'Big sur',
    type: 'dynamic',
    thumbnail: 'big-sur-4',
    timestamps: {
      wallpaper: {
        7: 'big-sur-2',
        9: 'big-sur-3',
        11: 'big-sur-4',
        13: 'big-sur-5',
        15: 'big-sur-6',
        16: 'big-sur-7',
        17: 'big-sur-8',
        18: 'big-sur-1',
      },
      // theme: {
      //   7: 'light',
      //   18: 'dark',
      // },
    },
  },

  catalina: {
    name: 'Catalina',
    type: 'dynamic',
    thumbnail: 'catalina-3',
    timestamps: {
      wallpaper: {
        7: 'catalina-2',
        9: 'catalina-3',
        11: 'catalina-4',
        13: 'catalina-5',
        15: 'catalina-6',
        16: 'catalina-7',
        17: 'catalina-8',
        18: 'catalina-1',
      },
      // theme: {
      //   9: 'light',
      //   17: 'dark',
      // },
    },
  },

  mojave: {
    name: 'Mojave',
    type: 'dynamic',
    thumbnail: 'mojave-2',
    timestamps: {
      wallpaper: {
        7: 'mojave-2',
        18: 'mojave-1',
      },
      // theme: {
      //   7: 'light',
      //   18: 'dark',
      // },
    },
  },

  desert: {
    name: 'The Desert',
    type: 'dynamic',
    thumbnail: 'desert-5',
    timestamps: {
      wallpaper: {
        7: 'desert-2',
        9: 'desert-3',
        11: 'desert-4',
        13: 'desert-5',
        15: 'desert-6',
        16: 'desert-7',
        17: 'desert-8',
        18: 'desert-1',
      },
      // theme: {
      //   7: 'light',
      //   18: 'dark',
      // },
    },
  },

  dome: {
    name: 'Dome',
    type: 'dynamic',
    thumbnail: 'dome-2',
    timestamps: {
      wallpaper: {
        7: 'dome-2',
        18: 'dome-1',
      },
      // theme: {
      //   7: 'light',
      //   18: 'dark',
      // },
    },
  },

  peak: {
    name: 'Peak',
    type: 'dynamic',
    thumbnail: 'peak-2',
    timestamps: {
      wallpaper: {
        7: 'peak-2',
        18: 'peak-1',
      },
      // theme: {
      //   7: 'light',
      //   18: 'dark',
      // },
    },
  },

  iridescence: {
    name: 'Iridescence',
    type: 'dynamic',
    thumbnail: 'iridescence-2',
    timestamps: {
      wallpaper: {
        7: 'iridescence-2',
        18: 'iridescence-1',
      },
      // theme: {
      //   7: 'light',
      //   18: 'dark',
      // },
    },
  },

  lake: {
    name: 'Lake',
    type: 'dynamic',
    thumbnail: 'lake-4',
    timestamps: {
      wallpaper: {
        7: 'lake-2',
        9: 'lake-3',
        11: 'lake-4',
        13: 'lake-5',
        15: 'lake-6',
        16: 'lake-7',
        17: 'lake-8',
        18: 'lake-1',
      },
      // theme: {
      //   7: 'light',
      //   18: 'dark',
      // },
    },
  },

  'solar-grad': {
    name: 'Solar Grad',
    type: 'dynamic',
    thumbnail: 'solar-grad-11',
    timestamps: {
      wallpaper: {
        6: 'solar-grad-2',
        7: 'solar-grad-3',
        8: 'solar-grad-4',
        9: 'solar-grad-5',
        10: 'solar-grad-6',
        11: 'solar-grad-7',
        12: 'solar-grad-8',
        13: 'solar-grad-9',
        14: 'solar-grad-10',
        15: 'solar-grad-11',
        16: 'solar-grad-12',
        17: 'solar-grad-13',
        18: 'solar-grad-14',
        19: 'solar-grad-5',
        20: 'solar-grad-6',
      },
      // theme: {
      //   6: 'light',
      //   20: 'dark',
      // },
    },
  },

  'kryptonian-demise': {
    name: 'Kryptonian Demise',
    type: 'standalone',
    thumbnail: '38',
  },

  'nahargarh-sunset': {
    name: 'Nahargarh Sunset',
    type: 'standalone',
    thumbnail: '39',
  },

  'somber-forest': {
    name: 'Somber Forest',
    type: 'standalone',
    thumbnail: '40',
  },

  'blade-runner-2149': {
    name: 'Blade Runner 2149',
    type: 'standalone',
    thumbnail: '41',
  },

  'lone-dune-wolf': {
    name: 'Lone Dune Wolf',
    type: 'standalone',
    thumbnail: '42',
  },

  'childhood-innocence': {
    name: 'Childhood Innocence',
    type: 'standalone',
    thumbnail: '43',
  },

  'fox-in-somber-forest': {
    name: 'Fox in Somber Forest',
    type: 'standalone',
    thumbnail: '44',
  },

  'blood-diamond': {
    name: 'Blood Diamond',
    type: 'standalone',
    thumbnail: '45',
  },

  'black-bird-in-a-city': {
    name: 'Black Bird in a City',
    type: 'standalone',
    thumbnail: '46',
  },

  'sunrise-of-dreams': {
    name: 'Sunrise of Dreams',
    type: 'standalone',
    thumbnail: '47',
  },

  'how-do-we-get-down': {
    name: 'How do we get down?',
    type: 'standalone',
    thumbnail: '48',
  },

  'cozy-night-with-cat': {
    name: 'Cozy Night with Cat',
    type: 'standalone',
    thumbnail: '49',
  },

  'age-of-titans': {
    name: 'Age of Titans',
    type: 'standalone',
    thumbnail: '50',
  },

  dune: {
    name: 'Dune',
    type: 'standalone',
    thumbnail: '51',
  },

  'vibrant-night': {
    name: 'Vibrant Night',
    type: 'standalone',
    thumbnail: '52',
  },

  'cabin-in-woods': {
    name: 'Cabin in the Woods',
    type: 'standalone',
    thumbnail: '53',
  },

  'asgardian-sunrise': {
    name: 'Asgardian Sunrise',
    type: 'standalone',
    thumbnail: '54',
  },

  'asura-lok': {
    name: 'Asura Lok',
    type: 'standalone',
    thumbnail: '55',
  },

  'my-neighbour-totoro': {
    name: 'My Neighbour Totoro',
    type: 'standalone',
    thumbnail: '56',
  },

  tron: {
    name: 'Tron',
    type: 'standalone',
    thumbnail: '57',
  },
});