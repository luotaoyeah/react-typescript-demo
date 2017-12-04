interface Image {
  id: number;
  title: string;
  color: string;
}

class ImageService {
  static images: Image[] = [
    {
      id: 0,
      title: 'Dark Orchid',
      color: 'DarkOrchid'
    },
    {
      id: 1,
      title: 'Lime Green',
      color: 'LimeGreen'
    },
    {
      id: 2,
      title: 'Tomato',
      color: 'Tomato'
    },
    {
      id: 3,
      title: 'Seven Ate Nine',
      color: '#789'
    },
    {
      id: 4,
      title: 'Crimson',
      color: 'Crimson'
    }
  ];

  /**
   *
   * @param {number} id
   * @returns {Image | undefined}
   */
  static getImage(id: number) {
    return ImageService.images.find(image => image.id === id);
  }
}

export { ImageService };