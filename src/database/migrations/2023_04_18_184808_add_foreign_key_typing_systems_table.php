<?php

use App\Models\Ship;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('typing_systems', function (Blueprint $table) {
            $table->foreignIdFor(Ship::class)->constrained();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('typing_systems', function (Blueprint $table) {
            //
        });
    }
};
