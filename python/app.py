from roboflow import Roboflow
import supervision as sv
import cv2
import time

def count_people_in_image(image_path):
    rf = Roboflow(api_key="VoxPG3IJf5NMAzTmMU3z")
    project = rf.workspace().project("crowd_count_v2")
    model = project.version(2).model

    result = model.predict(image_path, confidence=12, overlap=70).json()
    detections = sv.Detections.from_roboflow(result)
    return len(detections)


def capture_live_frames():
    cap = cv2.VideoCapture(0)  # Use the appropriate device index or video file
    start_time = time.time()

    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Show the frame for debugging purposes
        cv2.imshow('Frame', frame)
        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

        # Check if 30 seconds have passed
        if time.time() - start_time >= 30:
            # Reset the timer
            start_time = time.time()

            # Save the current frame as an image
            frame_path = 'current_frame.jpg'
            cv2.imwrite(frame_path, frame)

            # Pass the image to the ML function and print the number of people detected
            people_count = count_people_in_image(frame_path)
            print(f"People Count: {people_count}")

    cap.release()
    cv2.destroyAllWindows()

if __name__ == "__main__":
    capture_live_frames()