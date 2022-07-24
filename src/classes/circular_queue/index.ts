import IQueue from "../../interfaces/queue.ts";

class CircularQueue<T> implements IQueue<T> {
	private front;
	private rear;

	private array: Array<T>;

	readonly size;

	constructor(size: number) {
		this.array = new Array<T>(size);
		this.size = size;
		this.front = -1;
		this.rear = -1;
	}

	get count(): number {
		if (this.isEmpty) {
			return 0;
		}

		if (this.rear >= this.front) {
			return this.rear - this.front + 1;
		} else {
			return (this.size - this.front) + (this.rear + 1);
		}
	}

	get isFull(): boolean {
		return this.count === this.size;
	}

	get isEmpty(): boolean {
		return this.front === -1 || this.rear === -1 || this.count === 0;
	}

	enqueue(item: T): IQueue<T> {
		if (!this.isFull) {
			if (this.rear + 1 === this.size && this.front > 0) {
				 // 0 - this.front is empty
			} else {
				this.rear += 1
			}

			this.array[this.rear] = item
		}

		return this
	}

	dequeue(): T | undefined {
		let value;

		if (!this.isEmpty) {
			value = this.array[this.front];

			if (this.front === this.rear) {
				this.front -= 1
				this.rear -= 1
			} else {
				this.front += 1
			}
		}

		return value
	}

	peek(): T | undefined {
		if (!this.isEmpty) {
			return this.array[this.front];
		}

		return undefined;
	}

	empty() {
		if (!this.isEmpty) {
			this.front = -1;
			this.rear = -1;
		}
	}

	contains(item: T): boolean {
		if (!this.isEmpty) {
			if (this.front > this.rear) {

			}
		}
	}
}

export default CircularQueue;