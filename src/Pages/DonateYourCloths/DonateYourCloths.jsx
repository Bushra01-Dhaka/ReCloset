import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { div } from "framer-motion/client";

const DonateYourCloths = () => {
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
  } = useForm({
    shouldUnregister: false, // IMPORTANT
  });

  const axiosSecure = useAxiosSecure();

  const selectedType = watch("type");
  const clothCollect = watch("cloth_collect");
  const district = watch("district");
  const navigate = useNavigate();

  // Auto set donor email
  useEffect(() => {
    if (user?.email) {
      setValue("donar_email", user.email);
    }
  }, [user, setValue]);

  // Handle conditional value updates
  useEffect(() => {
    if (clothCollect === "self") {
      setValue(
        "selectedServiceCenter",
        `${district || "Your District"} Center`,
        { shouldDirty: true, shouldTouch: true }
      );
    }

    if (clothCollect === "doorstep") {
      setValue("charge", 70, { shouldDirty: true, shouldTouch: true });
    }
  }, [clothCollect, district, setValue]);

  const onSubmit = (data) => {
    console.log("FORM DATA 👉", data);
    const donateClothInfo = {
       donar_name: data.donar_name,
       donar_email: data.donar_email,
       donar_district: data.district,
       title: data.title,
       description: data.description,
       photo: data.image_url,
       cloth_type: data.cloth_type,
       condition: data.condition,
       type: data.type,
       cloth_collect_option: data.cloth_collect,
       cloth_num: data.cloth_num,
       selected_service_center: data.selectedServiceCenter,
       address: data.address,
       charge: data.charge,
       created_at: new Date().toISOString(),
    }

    axiosSecure.post("/cloths", donateClothInfo)
    .then((res) => {
      console.log(res.data);
      if(res.data.insertedId){
        toast.success("Cloths Donated Successfully")
        // navigate TODO: back to dashboard
        navigate("/");
      }
    })
    .catch(error => {
      console.log(error)
    })

  };

  return (
    <section className="py-20 px-4 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 pt-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold">
            Donate Your <span className="text-primary">Clothes</span>
          </h2>
          <p className="mt-4 text-base-content/70">
            Donate or resell your clothes responsibly with ReCloset.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card bg-transparent shadow-primary shadow-2xl p-8 lg:p-10 space-y-6"
        >
          {/* Donor Name */}
          <input
            {...register("donar_name", { required: true })}
            placeholder="Donor Name"
            className="input input-bordered w-full"
          />

          {/* Donor Email */}
          <input
            {...register("donar_email")}
            type="email"
            readOnly
            className="input input-bordered w-full bg-base-300"
          />

          {/* District */}
          <input
            {...register("district", { required: true })}
            placeholder="District"
            className="input input-bordered w-full"
          />

          {/* Title */}
          <input
            {...register("title", { required: true })}
            placeholder="Cloth Title"
            className="input input-bordered w-full"
          />

          {/* Description */}
          <textarea
            {...register("description")}
            placeholder="Description"
            className="textarea textarea-bordered w-full"
          />

          {/* Image URL */}
          <input
            {...register("image_url")}
            placeholder="Image URL"
            className="input input-bordered w-full"
          />

          {/* Cloth Type */}
          <select
            {...register("cloth_type", { required: true })}
            className="select select-bordered w-full"
          >
            <option value="">Select Cloth Type</option>
            {[
              "Pant", "T-shirt", "Shirt", "Dress", "Sweater", "Western Dress",
              "Party Dress", "Saree", "2 Piece", "3 Piece", "Panjabi",
              "Abaya", "Others"
            ].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          {/* Condition */}
          <div>
            <p className="font-semibold mb-2">Condition</p>
            <div className="flex gap-6">
              {["New", "Good", "Used"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={item}
                    {...register("condition", { required: true })}
                    className="radio radio-primary"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Type */}
          <div>
            <p className="font-semibold mb-2">Type</p>
            <div className="flex gap-6">
              {["donate", "resell"].map((item) => (
                <label key={item} className="flex items-center gap-2">
                  <input
                    type="radio"
                    value={item}
                    {...register("type", { required: true })}
                    className="radio radio-primary"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Donate Section */}
          {selectedType === "donate" && (
            <div className="space-y-4 border-t pt-4">
              <p className="font-semibold">Cloth Collection Method</p>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="self"
                  {...register("cloth_collect", { required: true })}
                  className="radio radio-primary"
                />
                Send to Service Center by Self
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="doorstep"
                  {...register("cloth_collect", { required: true })}
                  className="radio radio-primary"
                />
                Collect from Doorstep
              </label>

              {/* Self */}
              {clothCollect === "self" && (
                <input
                  {...register("selectedServiceCenter")}
                  readOnly
                  className="input input-bordered w-full bg-base-300"
                />
              )}

              {/* Doorstep */}
              {clothCollect === "doorstep" && (
                <div className="space-y-3">
                  <input
                    {...register("address", { required: true })}
                    placeholder="Pickup Address"
                    className="input input-bordered w-full"
                  />

                  <input
                    {...register("charge")}
                    type="number"
                    readOnly
                    className="input input-bordered w-full bg-base-300"
                  />
                </div>
              )}
            </div>
          )}

          {
            selectedType === "donate" && (
              <div className="space-y-4 border-t pt-4">
                    <input
            {...register("cloth_num")}
            type="number"
            placeholder="How many cloths wanna donate ?"
            className="input input-bordered w-full"
          />
              </div>
            )
          }

          {/* Resell */}
          {selectedType === "resell" && (
            <input
              {...register("price", { required: true })}
              type="number"
              placeholder="Expected Price"
              className="input input-bordered w-full"
            />
          )}

          {/* Submit */}
          <button type="submit" className="btn text-black font-bold btn-primary w-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default DonateYourCloths;
