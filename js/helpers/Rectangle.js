class Rectangle {
	intersects(rect1, rect2) {
		if (rect1.getPosY() <= rect2.getPosY() + rect2.getHeight()
             && rect1.getPosY() > rect2.getPosY()
             && rect1.getPosX() <= rect2.getPosX() + rect2.getWidth()
             && rect1.getPosX() > rect2.getPosX()
           ) {
			return true;
		}

		if (rect1.getPosY() + rect1.getHeight() <= rect2.getPosY() + rect2.getHeight() 
			&& rect1.getPosY() > rect2.getPosY()
			&& rect1.getPosX() <= rect2.getPosX() + rect2.getWidth()
            && rect1.getPosX() > rect2.getPosX()
		) {
			return true;
		}

		return false;
	}
}
