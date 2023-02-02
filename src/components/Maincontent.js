import CardJurusan from "./Card";
import Hero from "./Hero";
import jurusan1 from "./../asset/ilmu-komputer.jpg"
import jurusan2 from "./../asset/akuntansi.jpg"
import jurusan3 from "./../asset/teknik-mesin.jpg"
import { Container, Row } from "react-bootstrap";
import CardKegiatan from "./Cardkegiatan";
import kegiatan1 from "./../asset/kegiatan1.jpg"
import kegiatan2 from "./../asset/kegiatan2.jpeg"
import kegiatan3 from "./../asset/kegiatan3.jpg"


const Maincontent = () => {
    return (
        <div>
            <Hero />
            <Container>
                <Row>
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>

                    <div className="col-md-6 col-lg-4 my-3 items-center">
                        <CardJurusan image={jurusan1} jurusan={'Ilmu Komputer'} />
                    </div>
                    <div className="col-md-6 col-lg-4 my-3">
                        <CardJurusan image={jurusan3} jurusan={'Teknik Mesin'} />
                    </div>
                    <div className="col-md-6 col-lg-4 my-3">
                        <CardJurusan image={jurusan2} jurusan={'Akuntansi'} />
                    </div>

                    <div className="col-12">
                        <h1 className=" mt-3 text-center">Kegiatan</h1>
                        <div className="col-12">
                            <CardKegiatan image={kegiatan1} description={'Pembekalan materi dan berdiskusi di dalam kelas untuk menumbuhkan fundamental yang matang'}/>
                            <CardKegiatan image={kegiatan2} description={'Merasakan pengalaman bekerja dengan praktek langsung di lapangan.'}/>
                            <CardKegiatan image={kegiatan3} description={'Menyelesaikan studi kasus di lapangan secara berkelompok untuk menumbuhkan kebiasaan berkolaborasi dalam bekerja.'}/>
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default Maincontent;