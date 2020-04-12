const generateBalloonTemplate = (content, id, type) => {
  const template = 
    `<div class="balloon-wrapper">
      <span class="balloon-wrapper-subtitle">${types[type]}</div>
      <div>${content}</div>
      <div class="balloon-wrapper__button-wrapper">
        <button class="balloon-wrapper__button-wrapper-btn" onclick="window.get${type}(${id})">
          Больше информации
        </button>
      </div>
    </div>`;
  
  return template;
};

const types = {
  polygons: 'Ядерный полигон',
  catastrophes: 'Техногенная катастрофа',
};

export default generateBalloonTemplate;