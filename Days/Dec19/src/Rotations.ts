import { Point } from "./Point";

export const rotations: ((point: Point) => Point)[] = [
	(point: Point) => ({ x: +point.x, y: +point.y, z: +point.z }),
	(point: Point) => ({ x: -point.x, y: -point.y, z: +point.z }),
	(point: Point) => ({ x: +point.x, y: -point.y, z: -point.z }),
	(point: Point) => ({ x: -point.x, y: +point.y, z: -point.z }),
	(point: Point) => ({ x: -point.x, y: +point.z, z: +point.y }),
	(point: Point) => ({ x: +point.x, y: -point.z, z: +point.y }),
	(point: Point) => ({ x: -point.x, y: -point.z, z: -point.y }),
	(point: Point) => ({ x: +point.x, y: +point.z, z: -point.y }),
	(point: Point) => ({ x: -point.y, y: +point.x, z: +point.z }),
	(point: Point) => ({ x: +point.y, y: -point.x, z: +point.z }),
	(point: Point) => ({ x: -point.y, y: -point.x, z: -point.z }),
	(point: Point) => ({ x: +point.y, y: +point.x, z: -point.z }),
	(point: Point) => ({ x: +point.y, y: +point.z, z: +point.x }),
	(point: Point) => ({ x: -point.y, y: -point.z, z: +point.x }),
	(point: Point) => ({ x: +point.y, y: -point.z, z: -point.x }),
	(point: Point) => ({ x: -point.y, y: +point.z, z: -point.x }),
	(point: Point) => ({ x: +point.z, y: +point.x, z: +point.y }),
	(point: Point) => ({ x: -point.z, y: -point.x, z: +point.y }),
	(point: Point) => ({ x: +point.z, y: -point.x, z: -point.y }),
	(point: Point) => ({ x: -point.z, y: +point.x, z: -point.y }),
	(point: Point) => ({ x: -point.z, y: +point.y, z: +point.x }),
	(point: Point) => ({ x: +point.z, y: -point.y, z: +point.x }),
	(point: Point) => ({ x: -point.z, y: -point.y, z: -point.x }),
	(point: Point) => ({ x: +point.z, y: +point.y, z: -point.x }),
];
