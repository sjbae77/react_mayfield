import Layout from "../common/Layout";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBus } from "@fortawesome/free-solid-svg-icons";
import { faTrainSubway } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";

function Location() {
  const { kakao } = window;
  const info = [
    {
      title: "삼성동 코엑스",
      latlng: new kakao.maps.LatLng(37.547369989801844, 126.81897619294178),
      imgSrc: `${process.env.PUBLIC_URL}/img/marker.svg`,
      imgSize: new kakao.maps.Size(40, 40),
      imgPos: { offset: new kakao.maps.Point(20, 30) },
    },
  ];
  const [Location, setLocation] = useState(null);
  const [Traffic, setTraffic] = useState(false);
  const [Info, setInfo] = useState(info);
  const [Index, setIndex] = useState(0);
  const container = useRef(null);
  const option = {
    center: Info[Index].latlng,
    level: 3,
  };

  const imageSrc = Info[Index].imgSrc;
  const imageSize = Info[Index].imgSize;
  const imageOption = Info[Index].imgPos;

  var markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  const markerPosition = Info[Index].latlng;

  const marker = new kakao.maps.Marker({
    position: markerPosition,
    image: markerImage,
  });

  useEffect(() => {
    container.current.innerHTML = "";

    //지도 인스턴스 생성
    const map_instance = new kakao.maps.Map(container.current, option);

    const handleResize = () => {
      map_instance.setCenter(Info[Index].latlng);
    };

    //마커 출력
    marker.setMap(map_instance);
    //인스턴스 값을 state에 담아서 관리
    setLocation(map_instance);

    //지도타입 컨트롤바 출력
    const mapTypeControl = new kakao.maps.MapTypeControl();
    map_instance.addControl(
      mapTypeControl,
      kakao.maps.ControlPosition.TOPRIGHT
    );

    //지도 줌 컨트롤바 출력
    const zoomControl = new kakao.maps.ZoomControl();
    map_instance.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    //브라우저 리사이즈시 마커 중앙 유지
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [Index]);

  useEffect(() => {
    if (Location) {
      Traffic
        ? Location.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
        : Location.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    }
  }, [Traffic]);

  return (
    <Layout name={"Location"}>
      <div className="inner">
        <h1>LOCATION</h1>
        <div className="map-wrap">
          <address>
            서울특별시 강서구 방화대로 94 메이필드호텔 (우편번호 07506)
          </address>
          <div id="map" ref={container}></div>
          <div className="btnSet">
            <button onClick={() => setTraffic(!Traffic)}>
              {Traffic ? "교통정보 끄기" : "교통정보 켜기"}
            </button>
          </div>
        </div>
        <div className="cont-wrap">
          <div className="cont">
            <div className="icon-wrap">
              <span className="icon">
                <FontAwesomeIcon icon={faBus} />
              </span>
              <p>
                https://bus.go.kr
                <br />
                (서울버스정보시스템)
              </p>
            </div>
            <div className="text-wrap">
              <span>버스로 오실려면</span>
              <ul className="desc">
                <li>A : 대한항공, 메이필드호텔 앞 하차 / 71,653,6630</li>
                <li>
                  B : 강서면허시험장, 메이필드호텔 앞 하차 /
                  651,653,6630,6632,6642
                </li>
                <li>
                  C : 강서면허시험장, 메이필드호텔 앞 하차 /
                  651,6628,6632,6642,6647,강서05
                </li>
                <li>
                  D : 강서면허시험장, 메이필드호텔 앞 하차 /
                  388,650,651,6628,6630
                </li>
              </ul>
            </div>
          </div>
          <div className="cont">
            <div className="icon-wrap">
              <span className="icon">
                <FontAwesomeIcon icon={faTrainSubway} />
              </span>
              <p>
                http://www.seoulmetro.co.kr
                <br />
                (서울교통공사)
              </p>
            </div>
            <div className="text-wrap">
              <span>지하철로 오실려면</span>
              <p className="desc">김포공항역에서 하차하여 호텔셔틀/택시 탑승</p>
            </div>
          </div>
          <div className="cont">
            <div className="icon-wrap">
              <span className="icon">
                <FontAwesomeIcon icon={faCar} />
              </span>
            </div>
            <div className="text-wrap">
              <span>승용차로 오실려면</span>
              <p className="desc">00000 고속도로 : 000000 방면</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Location;
