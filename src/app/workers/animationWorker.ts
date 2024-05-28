interface Message {
    type: string;
    payload?: any;
  }

  self.onmessage = (event: MessageEvent<Message>) => {
    const { type, payload } = event.data;
    switch (type) {
      case 'ANIMATE':
        const result = performAnimation(payload);
        self.postMessage({ type: 'ANIMATION_RESULT', payload: result });
        break;
      default:
        console.error('Unknown message type:', type);
    }
  };

  const performAnimation = (data: any) => {
    // Perform your actual complex calculation for animation
    return data.map((item: any) => ({
      ...item,
      y: item.y,
      opacity: item.opacity
    }));
  };
